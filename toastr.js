// By: Hans Fjällemark and John Papa
// https://github.com/CodeSeven/toastr
// 
// Modified to support css styling instead of inline styling
// Inspired by https://github.com/Srirangan/notifer.js/

; (function (define) {
    define(['jquery'], function ($) {
        var toastr = (function () {
            var
                defaults = {
                    tapToDismiss: true,
                    toastClass: 'toast',
                    containerId: 'toast-container',
                    debug: false,
                    fadeIn: 300,
                    fadeOut: 1000,
                    extendedTimeOut: 1000,
                    iconClasses: {
                        error: 'toast-error',
                        info: 'toast-info',
                        success: 'toast-success',
                        warning: 'toast-warning'
                    },
                    iconClass: 'toast-info',
                    positionClass: 'toast-top-right',
                    timeOut: 5000, // Set timeOut to 0 to make it sticky
                    titleClass: 'toast-title',
                    messageClass: 'toast-message',
                    closeButton : false
                },

                error = function (message, title, optionsOverride) {
                    return notify({
                        iconClass: getOptions().iconClasses.error,
                        message: message,
                        optionsOverride: optionsOverride,
                        title: title
                    });
                },

                getContainer = function (options) {
                    var $container = $('#' + options.containerId);
                    if ($container.length) {
                        return $container;
                    }
                    $container = $('<div/>')
                        .attr('id', options.containerId)
                        .addClass(options.positionClass);
                    $container.appendTo($('body'));
                    return $container;
                },

                getOptions = function () {
                    return $.extend({}, defaults, toastr.options);
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
                        iconClass = map.iconClass || options.iconClass,
                        $closeBtn,
                        closeBtn = options.closeButton,
        			    closeBtnIsString = typeof closeBtn === 'string',        			    
        			    closeTitle = closeBtnIsString ? closeBtn : 'Close Notification';

                    if (typeof (map.optionsOverride) !== 'undefined') {
                        options = $.extend(options, map.optionsOverride);
                        iconClass = map.optionsOverride.iconClass || iconClass;
                    }

                    var
                        intervalId = null,
                        $container = getContainer(options),
                        $toastElement = $('<div/>'),
                        $titleElement = $('<div/>'),
                        $messageElement = $('<div/>'),
						$closeBtnElement = $('<span/>'),
                        response = { options: options, map: map };

                    if (map.iconClass) {
                        $toastElement.addClass(options.toastClass).addClass(iconClass);
                    }

                    if (map.title) {
                        $titleElement.append(map.title).addClass(options.titleClass);
                        $toastElement.append($titleElement);
                    }
					
					if (closeBtn) {
                		
						//if user pass a jquery button to options.closeButton attach it else create a new one
                		if (closeBtn.jquery) {
                			$closeBtn = closeBtn;
                		} else {
						    //create a jquery button
							$closeBtn = $('<a />', {
											'title': closeTitle,
											'html': '&nbsp;&nbsp;'
                			});	
                			
                		}
                		
						$closeBtnElement.append($closeBtn).addClass('toast-close');
						//if title is present attach the button to title else attach it to toastElement
						if (map.title) {
						  $titleElement.append($closeBtnElement); 
						} else {
						  $toastElement.append($closeBtnElement);
						}
						
                		$closeBtnElement.click(function(e){
							fadeAway();
							e.preventDefault();
							//stopPropagation usefull to prevent options.onclick being fired 
							e.stopPropagation();
                		});
                	}

                    if (map.message) {
                        $messageElement.append(map.message).addClass(options.messageClass);
                        $toastElement.append($messageElement);
                    }

                    var fadeAway = function () {
                        if ($(':focus', $toastElement).length > 0) {
                            return;
                        }
                        var fade = function (callback) {
                            return $toastElement.fadeOut(options.fadeOut, callback);
                        };
                        var removeToast = function () {
                            if ($toastElement.is(':visible')) {
                                return;
                            }
                            $toastElement.remove();
                            if ($container.children().length === 0) {
                                $container.remove();
                            }
                        };
                        fade(removeToast);
                    };
                    var delayedFadeAway = function () {
                        if (options.timeOut > 0 || options.extendedTimeOut > 0) {
                            intervalId = setTimeout(fadeAway, options.extendedTimeOut);
                        }
                    };
                    var stickAround = function () {
                        clearTimeout(intervalId);
                        $toastElement.stop(true, true).fadeIn(options.fadeIn);
                    };
                    $toastElement.hide();
                    $container.prepend($toastElement);
                    $toastElement.fadeIn(options.fadeIn);
					
					//if user require closeButton make toastr sticky
                    if (options.timeOut > 0 && !closeBtn) {
                        intervalId = setTimeout(fadeAway, options.timeOut);
                    }

					//prevent binding stickAround hover if closeButton required
                    if (!options.closeButton) {
                    	$toastElement.hover(stickAround, delayedFadeAway);
                	} 
					
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
                    var $container = $('#' + options.containerId);
                    if ($toastElement && $(':focus', $toastElement).length === 0) {
                        var removeToast = function () {
                            if ($toastElement.is(':visible')) {
                                return;
                            }
                            $toastElement.remove();
                            if ($container.children().length === 0) {
                                $container.remove();
                            }
                        };
                        $toastElement.fadeOut(options.fadeOut, removeToast);
                        return;
                    }
                    if ($container.length) {
                        $container.fadeOut(options.fadeOut, function () {
                            $container.remove();
                        });
                    }
                };
            return {
                clear: clear,
                error: error,
                info: info,
                options: {},
                success: success,
                version: '1.1.2',
                warning: warning
            };
        })();
        return toastr;
    });
}(typeof define === 'function' && define.amd ? define : function (deps, factory) {
    if (typeof module !== 'undefined' && module.exports) { //Node
        module.exports = factory(require(deps[0]));
    } else {
        window['toastr'] = factory(window['jQuery']);
    }
}));