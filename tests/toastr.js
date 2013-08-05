/*
 * Copyright 2012 John Papa and Hans Fjällemark.  
 * All Rights Reserved.  
 * Use, reproduction, distribution, and modification of this code is subject to the terms and 
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * Author: John Papa and Hans Fjällemark
 * Project: https://github.com/CodeSeven/toastr
 */
; (function (define) {
    define(['jquery'], function ($) {
        return (function () {
            var version = '1.3.0',
                $container,

                defaults = {
                    tapToDismiss: true,
                    toastClass: 'toast',
                    containerId: 'toast-container',
                    debug: false,
                    fadeIn: 300,
                    onFadeIn: undefined,
                    fadeOut: 1000,
                    onFadeOut: undefined,
                    showMethod: 'fadeIn',
                    showDuration: 300,
                    showEasing: '',
                    onShown: undefined,
                    hideMethod: 'fadeOut',
                    hideDuration: 1000,
                    hideEasing: '',
                    onHidden: undefined,
                    extendedTimeOut: 1000,
                    iconClasses: {
                        error: 'toast-error',
                        info: 'toast-info',
                        success: 'toast-success',
                        warning: 'toast-warning'
                    },
                    iconClass: 'toast-info',
                    positionClass: 'toast-top-right',
                    timeOut: 5000, // Set timeOut and extendedTimeout to 0 to make it sticky
                    titleClass: 'toast-title',
                    messageClass: 'toast-message',
                    target: 'body',
                    newestOnTop: true
                },
                
                error = function (message, title, optionsOverride) {
                    return notify({
                        iconClass: getOptions().iconClasses.error,
                        message: message,
                        optionsOverride: optionsOverride,
                        title: title
                    });
                },

                info = function (message, title, optionsOverride) {
                    return notify({
                        iconClass: getOptions().iconClasses.info,
                        message: message,
                        optionsOverride: optionsOverride,
                        title: title
                    });
                },

                notify = function (map) {
                    var
                        options = getOptions(),
                        iconClass = map.iconClass || options.iconClass;

                    if (typeof (map.optionsOverride) !== 'undefined') {
                        options = $.extend(options, map.optionsOverride);
                        iconClass = map.optionsOverride.iconClass || iconClass;
                    }

                    $container = getContainer(options);
                    var
                        intervalId = null,
                        $toastElement = $('<div/>'),
                        $titleElement = $('<div/>'),
                        $messageElement = $('<div/>'),
                        response = { options: options, map: map };

                    if (map.iconClass) {
                        $toastElement.addClass(options.toastClass).addClass(iconClass);
                    }

                    if (map.title) {
                        $titleElement.append(map.title).addClass(options.titleClass);
                        $toastElement.append($titleElement);
                    }

                    if (map.message) {
                        $messageElement.append(map.message).addClass(options.messageClass);
                        $toastElement.append($messageElement);
                    }

                    $toastElement.hide();
                    if (options.newestOnTop) {
                        $container.prepend($toastElement);
                    } else {
                        $container.append($toastElement);
                    }

                    $toastElement[options.showMethod]({ duration: options.showDuration, easing: options.showEasing, complete: options.onShown });
                    if (options.timeOut > 0) {
                        intervalId = setTimeout(fadeAway, options.timeOut);
                    }

                    $toastElement.hover(stickAround, delayedFadeAway);
                    if (!options.onclick && options.tapToDismiss) {
                        $toastElement.click(fadeAway);
                    }

                    if (options.onclick) {
                        $toastElement.click(function () {
                            options.onclick() && fadeAway();
                        });
                    }

                    if (options.debug && console) {
                        console.log(response);
                    }

                    return $toastElement;

                    function fadeAway() {
                        if ($(':focus', $toastElement).length > 0) {
                            return;
                        }
                        return $toastElement[options.hideMethod]({
                            duration: options.hideDuration,
                            easing: options.hideEasing,
                            complete: function () {
                                removeToast($toastElement);
                                if (options.onHidden) {
                                    options.onHidden();
                                }
                            }
                        });
                    }

                    function delayedFadeAway() {
                        if (options.timeOut > 0 || options.extendedTimeOut > 0) {
                            intervalId = setTimeout(fadeAway, options.extendedTimeOut);
                        }
                    }

                    function stickAround() {
                        clearTimeout(intervalId);
                        $toastElement.stop(true, true)[options.showMethod]({ duration: options.showDuration, easing: options.showEasing });
                    }
                },

                success = function (message, title, optionsOverride) {
                    return notify({
                        iconClass: getOptions().iconClasses.success,
                        message: message,
                        optionsOverride: optionsOverride,
                        title: title
                    });
                },

                warning = function (message, title, optionsOverride) {
                    return notify({
                        iconClass: getOptions().iconClasses.warning,
                        message: message,
                        optionsOverride: optionsOverride,
                        title: title
                    });
                },

                clear = function ($toastElement) {
                    var options = getOptions();
                    if (!$container) {
                        getContainer(options);
                    }
                    if ($toastElement && $(':focus', $toastElement).length === 0) {
                        $toastElement[options.hideMethod]({
                            duration: options.hideDuration,
                            easing: options.hideEasing,
                            complete: function () {
                                removeToast($toastElement);
                            }
                        });
                        return;
                    }
                    if ($container.children().length) {
                        $container[options.hideMethod]({
                            duration: options.hideDuration,
                            easing: options.hideEasing,
                            complete: function () {
                                $container.remove();
                            }
                        });
                    }
                };

            var toastr = {
                clear: clear,
                error: error,
                getContainer: getContainer,
                info: info,
                options: {},
                success: success,
                version: version,
                warning: warning
            };

            return toastr;

            //#region Internal Methods

            function getContainer(options) {
                if (!options) { options = getOptions(); }
                $container = $('#' + options.containerId);
                if ($container.children().length) {
                    return $container;
                }
                $container = $('<div/>')
                    .attr('id', options.containerId)
                    .addClass(options.positionClass);
                $container.appendTo($(options.target));
                return $container;
            }

            function getOptions() {
                var options = $.extend({}, defaults, toastr.options);
                mergeFadeAndShowOptions(options);
                return options;
            }

            function mergeFadeAndShowOptions(options) {
                options.onShown = options.onFadeIn || options.onShown;
                options.onHidden = options.onFadeOut || options.onHidden;
                options.showDuration = options.fadeIn || options.showDuration;
                options.hideDuration = options.fadeOut || options.hideDuration;
            }

            function removeToast($toastElement) {
                if (!$container) { $container = getContainer(); }
                if ($toastElement.is(':visible')) {
                    return;
                }
                $toastElement.remove();
                $toastElement = null;
                if ($container.children().length === 0) {
                    $container.remove();
                }
            }
            //#endregion

        })();
    });
}(typeof define === 'function' && define.amd ? define : function (deps, factory) {
    if (typeof module !== 'undefined' && module.exports) { //Node
        module.exports = factory(require(deps[0]));
    } else {
        window['toastr'] = factory(window['jQuery']);
    }
}));
