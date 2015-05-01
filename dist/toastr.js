"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/*
 * Toastr
 * Copyright 2012-2015
 * Authors: John Papa,  Tim Ferrell and Stephen Bero.
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * ARIA Support: Greta Krafsig
 *
 * Project: https://github.com/CodeSeven/toastr
 */

var toastr = (function () {
    function toastr(options) {
        _classCallCheck(this, toastr);

        this.container = null;
        this.listener = null;
        this.toastId = 0;
        this.toastType = {
            error: "error",
            info: "info",
            success: "success",
            warning: "warning"
        };
        this.previousToast = undefined;
        this.options = options;

        return this;
    }

    _createClass(toastr, {
        getContainer: {

            /**
             * Retrieves the container element.
             * @param options
             * @param {boolean} createContainer Whether or not to create a container if one does not already exist.
             * @returns {Element}
             */

            value: function getContainer(options, createContainer) {

                if (typeof options == "undefined") {
                    options = this.getOptions();
                }

                this.container = document.getElementById(options.containerId);

                if (this.container != null) {
                    return this.container;
                }

                if (createContainer) {
                    this.container = this.createContainer(options);
                }

                return this.container;
            }
        },
        error: {

            /**
             * Creates a toast with the 'error' styling.
             * @param message {string}
             * @param title {string}
             * @param optionsOverride {object}
             */

            value: function error(message, title, optionsOverride) {
                return this.notify({
                    type: this.toastType.error,
                    iconClass: this.getOptions().iconClasses.error,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }
        },
        info: {

            /**
             * Creates a toast with the 'info' styling.
             * @param message {string}
             * @param title {string}
             * @param optionsOverride {object}
             */

            value: function info(message, title, optionsOverride) {
                return this.notify({
                    type: this.toastType.info,
                    iconClass: this.getOptions().iconClasses.info,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }
        },
        success: {

            /**
             * Creates a toast with the 'success' styling.
             * @param message {string}
             * @param title {string}
             * @param optionsOverride {object}
             */

            value: function success(message, title, optionsOverride) {
                return this.notify({
                    type: this.toastType.success,
                    iconClass: this.getOptions().iconClasses.success,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }
        },
        warning: {

            /**
             * Creates a toast with the 'warning' styling.
             * @param message {string}
             * @param title {string}
             * @param optionsOverride {object}
             */

            value: function warning(message, title, optionsOverride) {
                return this.notify({
                    type: this.toastType.warning,
                    iconClass: this.getOptions().iconClasses.warning,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }
        },
        subscribe: {

            /**
             * Adds a listener to when a toast is shown.
             * @param callback
             */

            value: function subscribe(callback) {
                this.listener = callback;
            }
        },
        clear: {

            /**
             * Clears the provided toast element from the screen, executing animations.
             * @param {Element} toastElement
             * @param clearOptions
             */

            value: function clear(toastElement, clearOptions) {

                var options = this.getOptions();

                if (this.container == null) {
                    this.getContainer(options, false);
                }

                if (!this.clearToast(toastElement, options, clearOptions)) {
                    this.clearContainer(options);
                }
            }
        },
        remove: {

            /**
             * Removes a toast from the screen, without executing animations.
             * Good to go for v3.
             * @param {Element} toastElement The toast to be removed.
             */

            value: function remove(toastElement) {
                var options = this.getOptions();

                if (typeof this.container == "undefined") {
                    this.getContainer(options, false);
                }

                if (typeof toastElement == "undefined" && toastElement.matches(":focus")) {
                    this.removeToast(toastElement);
                    return;
                }

                if (!this.container.hasChildNodes()) {
                    this.container.remove();
                }
            }
        },
        clearContainer: {

            /**
             * Clears all toasts from the container.
             * @param options
             */

            value: function clearContainer(options) {
                var _this = this;

                this.container.childNodes.forEach(function (item) {
                    return _this.clearToast(item, options, false);
                });
            }
        },
        clearToast: {

            /**
             * Clears a toast.
             * @private
             * @param toastElement
             * @param options
             * @param clearOptions
             * @returns {boolean}
             */

            value: function clearToast(toastElement, options, clearOptions) {
                var forceClosureOfToast = clearOptions && clearOptions.force ? clearOptions.force : false;
                if (typeof toastElement !== "undefined" && (forceClosureOfToast || toastElement.matches(":focus"))) {

                    // TODO: Show exit animation and do callback etc
                    return true;
                }
                return false;
            }
        },
        createContainer: {

            /**
             * Creates the toastr container.
             * @private
             * @param options
             * @returns {Element}
             * @see Updated for v3.
             */

            value: function createContainer(options) {
                this.container = document.createElement("div");
                this.container.classList.add(options.positionClass);
                this.container.setAttribute("id", options.containerId);
                this.container.setAttribute("aria-live", "polite");
                this.container.setAttribute("role", "alert");

                document.querySelector(options.target).appendChild(this.container);

                return this.container;
            }
        },
        getDefaultOptions: {
            value: function getDefaultOptions() {
                return {
                    tapToDismiss: true,
                    toastClass: "toast",
                    containerId: "toast-container",
                    debug: false,

                    showMethod: "fadeIn", //fadeIn, slideDown, and show are built into jQuery
                    showDuration: 300,
                    showEasing: "swing", //swing and linear are built into jQuery
                    onShown: undefined,
                    hideMethod: "fadeOut",
                    hideDuration: 1000,
                    hideEasing: "swing",
                    onHidden: undefined,

                    extendedTimeOut: 1000,
                    iconClasses: {
                        error: "toast-error",
                        info: "toast-info",
                        success: "toast-success",
                        warning: "toast-warning"
                    },
                    iconClass: "toast-info",
                    positionClass: "toast-top-left",
                    timeOut: 5000, // Set timeOut and extendedTimeOut to 0 to make it sticky
                    titleClass: "toast-title",
                    messageClass: "toast-message",
                    target: "body",
                    closeHtml: "button",
                    newestOnTop: true,
                    preventDuplicates: false,
                    progressBar: false
                };
            }
        },
        publish: {

            /**
             * Broadcast toast notification to the listener object.
             * @param {object} args Arguments to provide to the listener callback.
             */

            value: function publish(args) {

                if (typeof this.listener == "undefined" || this.listener == null) {
                    return;
                }

                this.listener(args);
            }
        },
        notify: {

            /**
             * Core method for generating toasts.
             * @param map
             * @returns {Element}
             */

            value: function notify(map) {
                var options = this.getOptions();
                var iconClass = map.iconClass || options.iconClass;

                if (typeof map.optionsOverride !== "undefined") {
                    options = this.extend(options, map.optionsOverride);
                    iconClass = map.optionsOverride.iconClass || iconClass;
                }

                if (shouldExit(options, map)) {
                    return;
                }

                this.toastId++;
                var container = this.getContainer(options, true);

                var intervalId = null;
                var toastElement = document.createElement("div");
                toastElement.classList.add(iconClass);

                var titleElement = document.createElement("div");

                /**
                 *
                 * @type {Element}
                 */
                var messageElement = document.createElement("div");
                var progressElement = document.createElement("div");
                var closeElement = document.createElement("div");
                closeElement.innerHtml = options.closeHtml;

                var progressBar = {
                    intervalId: null,
                    hideEta: null,
                    maxHideTime: null
                };
                var response = {
                    toastId: this.toastId,
                    state: "visible",
                    startTime: new Date(),
                    options: options,
                    map: map
                };

                personalizeToast();

                displayToast();

                handleEvents();

                this.publish(response);

                if (options.debug && console) {
                    console.log(response);
                }

                return toastElement;

                function personalizeToast() {
                    setIcon();
                    setTitle();
                    setMessage();
                    setCloseButton();
                    setProgressBar();
                    setSequence();
                }

                function handleEvents() {

                    toastElement.addEventListener("mouseover", stickAround);
                    toastElement.addEventListener("mouseout", delayedHideToast);

                    if (!options.onclick && options.tapToDismiss) {
                        toastElement.click(hideToast);
                    }

                    if (options.closeButton && closeElement) {
                        closeElement.click(function (event) {
                            if (event.stopPropagation) {
                                event.stopPropagation();
                            } else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {
                                event.cancelBubble = true;
                            }
                            hideToast(true);
                        });
                    }

                    if (options.onclick) {
                        toastElement.click(function () {
                            options.onclick(); // TODO remove jQuery
                            hideToast();
                        });
                    }
                }

                /**
                 * Pushes the current toast out for display.
                 */
                function displayToast() {

                    console.log("Appending toast to container.", toastElement);

                    container.appendChild(toastElement);

                    var animationFinishedCallback = function animationFinishedCallback(args) {

                        console.log("Toast animation in completed.", args);

                        if (options.timeOut > 0) {
                            intervalId = setTimeout(hideToast, options.timeOut);
                            progressBar.maxHideTime = parseFloat(options.timeOut);
                            progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                            if (options.progressBar) {
                                progressBar.intervalId = setInterval(updateProgress, 10);
                            }
                        }
                    };

                    animateToastIn(toastElement, animationFinishedCallback);
                }

                /**
                 * Defines the animation for animating toasts onto the document.
                 * @param {Element} toastElement The element to be animated in.
                 * @param {Function} animationFinishedCallback The function to be executed when the animation is completed.
                 */
                function animateToastIn(toastElement, animationFinishedCallback) {
                    var animateInPlayer = toastElement.animate([{ opacity: 0 }, { opacity: 1 }], {
                        duration: options.showDuration,
                        iterations: 1,
                        delay: 0
                    });
                    animateInPlayer.onfinish = animationFinishedCallback;
                }

                /**
                 * Adds a class to set the icon for the toast.
                 * Good to go for v3.
                 */
                function setIcon() {
                    if (typeof map.iconClass !== "undefined") {
                        toastElement.classList.add(options.toastClass);
                    }
                }

                function setSequence() {
                    if (options.newestOnTop) {} else {
                        this.container.appendChild(toastElement);
                    }
                }

                /**
                 * Good to go for v3.
                 */
                function setTitle() {
                    if (typeof map.title !== "undefined") {
                        titleElement.innerHTML = map.title;
                        titleElement.classList.add(options.titleClass);
                        toastElement.appendChild(titleElement);
                    }
                }

                /**
                 * Good to go for v3.
                 */
                function setMessage() {
                    if (typeof map.message !== "undefined") {

                        var mapMessage = document.createElement("div");
                        mapMessage.innerHTML = map.message;

                        messageElement.appendChild(mapMessage);
                        messageElement.classList.add(options.messageClass);

                        toastElement.appendChild(messageElement);
                    }
                }

                function setCloseButton() {
                    if (typeof options.closeButton !== "undefined") {
                        closeElement.classList.add("toast-close-button");
                        closeElement.setAttribute("role", "button");
                        toastElement.appendChild(closeElement);
                    }
                }

                function setProgressBar() {
                    if (typeof options.progressBar !== "undefined") {
                        progressElement.classList.add("toast-progress");
                        toastElement.appendChild(progressElement);
                    }
                }

                function shouldExit(options, map) {
                    if (options.preventDuplicates) {
                        if (map.message === this.previousToast) {
                            return true;
                        } else {
                            this.previousToast = map.message;
                        }
                    }
                    return false;
                }

                function hideToast(override) {
                    if (toastElement.matches(":focus") && !override) {
                        return;
                    }

                    clearTimeout(progressBar.intervalId);

                    console.log("Hiding toast now.", toastElement);

                    var removeFunction = this.removeToast;

                    var animationFinishedCallback = function animationFinishedCallback(args) {
                        console.log("Toast is now hiding.", args);

                        var parentNode = toastElement.parentNode;

                        // Repeating myself. Try to find a way to not duplicate code.
                        // Use the element to get it's parent so we can remove it.
                        parentNode.removeChild(toastElement);

                        if (!parentNode.hasChildNodes()) {
                            container.parentNode.removeChild(container);
                            this.previousToast = undefined;
                        }

                        toastElement = null;
                    };

                    animateToastOut(toastElement, animationFinishedCallback);
                };

                /**
                 * Defines the animation for animating toasts off of the document.
                 * @param {Element} toastElement The element to be animated out.
                 * @param {Function} animationFinishedCallback The function to be executed when the animation is completed.
                 */
                function animateToastOut(toastElement, animationFinishedCallback) {
                    var animateInPlayer = toastElement.animate([{ opacity: 1 }, { opacity: 0 }], {
                        duration: options.hideDuration,
                        iterations: 1,
                        delay: 0
                    });
                    animateInPlayer.onfinish = animationFinishedCallback;
                }

                function delayedHideToast() {
                    if (options.timeOut > 0 || options.extendedTimeOut > 0) {
                        intervalId = setTimeout(hideToast, options.extendedTimeOut);
                        progressBar.maxHideTime = parseFloat(options.extendedTimeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                    }
                }

                function stickAround() {
                    clearTimeout(intervalId);
                    progressBar.hideEta = 0;
                    // toastElement.stop(true, true)[options.showMethod]( // TODO Remove jQuery
                    // {duration: options.showDuration, easing: options.showEasing}
                    // );
                }

                function updateProgress() {
                    var percentage = (progressBar.hideEta - new Date().getTime()) / progressBar.maxHideTime * 100;
                    progressElement.style.width(percentage + "%");
                }
            }
        },
        getOptions: {

            /**
             * Gets the current options for toastr.
             * Includes defaults where not overriden.
             * @private
             * @returns {Object}
             */

            value: function getOptions() {
                return this.extend(this.getDefaultOptions(), this.options);
            }
        },
        removeToast: {

            /**
             * Removes a toast from the screen.
             * @param toastElement
             */

            value: function removeToast(toastElement) {

                if (typeof this.container == "undefined") {
                    this.container = this.getContainer();
                }

                if (this.isElementVisible(toastElement)) {
                    return;
                }

                // Use the element to get it's parent so we can remove it.
                toastElement.parentNode.removeChild(toastElement);

                toastElement = null;

                if (this.container.childNodes.length === 0) {
                    this.container.parentNode.removeChild(this.container);
                    this.previousToast = undefined;
                }
            }
        },
        isElementVisible: {

            /**
             * Checks if the provided element is visible on screen.
             * @private
             * @param element
             * @returns {boolean}
             */

            value: function isElementVisible(element) {
                return element.offsetWidth > 0 && element.offsetHeight > 0;
            }
        },
        extend: {

            /**
             * Merge defaults with user options
             * @param {Object} defaults Default settings
             * @param {Object} options User options
             * @returns {Object} Merged values of defaults and options
             * @see http://gomakethings.com/vanilla-javascript-version-of-jquery-extend/
             */

            value: function extend(defaults, options) {
                var extended = {};
                var prop;
                for (prop in defaults) {
                    if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
                        extended[prop] = defaults[prop];
                    }
                }
                for (prop in options) {
                    if (Object.prototype.hasOwnProperty.call(options, prop)) {
                        extended[prop] = options[prop];
                    }
                }
                return extended;
            }
        }
    });

    return toastr;
})();

// This makes toastr an export for closure's sake
window.toastr = toastr;

//this.container.prepend(toastElement);
// TODO: Not yet supported in v3
//# sourceMappingURL=../maps/toastr.js.map