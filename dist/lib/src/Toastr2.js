"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var merge_1 = require("lodash/merge");
var package_json_1 = require("../package.json");
var Toastr = /** @class */ (function () {
    function Toastr(options) {
        this.$container = null;
        this.toastId = 0;
        this.previousToast = null;
        this.toastType = {
            info: 'info',
            error: 'error',
            warning: 'warning',
            success: 'success',
        };
        this.version = package_json_1.version;
        this.options = {
            tapToDismiss: true,
            toastClass: 'toast',
            containerId: 'toast-container',
            debug: false,
            showMethod: 'fadeIn',
            showDuration: 300,
            showEasing: 'swing',
            onShown: undefined,
            hideMethod: 'fadeOut',
            hideDuration: 1000,
            hideEasing: 'swing',
            onHidden: undefined,
            closeMethod: false,
            closeDuration: false,
            closeEasing: false,
            closeOnHover: true,
            extendedTimeOut: 1000,
            iconClasses: {
                error: 'toast-error',
                info: 'toast-info',
                success: 'toast-success',
                warning: 'toast-warning',
            },
            iconClass: 'toast-info',
            positionClass: 'toast-top-right',
            timeOut: 5000,
            titleClass: 'toast-title',
            messageClass: 'toast-message',
            escapeHtml: false,
            target: 'body',
            closeHtml: '<button type="button">&times;</button>',
            closeClass: 'toast-close-button',
            newestOnTop: true,
            preventDuplicates: false,
            progressBar: false,
            progressClass: 'toast-progress',
            rtl: false,
            onCloseClick: function () { },
            closeButton: false,
        };
        this.options = merge_1.default({}, this.options, options);
        debugger;
        this.createContainer();
    }
    Toastr.prototype.createContainer = function () {
        this.$container = document.createElement('div');
        this.$container.setAttribute('id', this.options.containerId);
        this.$container.classList.add(this.options.positionClass);
        var target = document.getElementsByTagName(this.options.target);
        if (target && target[0]) {
            target[0].appendChild(this.$container);
        }
        return this.$container;
    };
    Toastr.prototype.getContainer = function (options, create) {
        if (options === void 0) { options = this.options; }
        if (create === void 0) { create = null; }
        this.$container = document.getElementById(options.containerId);
        if (this.$container) {
            return this.$container;
        }
        if (create) {
            this.$container = this.createContainer();
        }
        return this.$container;
    };
    Toastr.prototype.error = function (message, title, optionsOverride) {
        return this.notify({
            type: this.toastType.error,
            iconClass: this.options.iconClasses.error,
            message: message,
            optionsOverride: optionsOverride,
            title: title,
        });
    };
    Toastr.prototype.warning = function (message, title, optionsOverride) {
        return this.notify({
            type: this.toastType.warning,
            iconClass: this.options.iconClasses.warning,
            message: message,
            optionsOverride: optionsOverride,
            title: title,
        });
    };
    Toastr.prototype.success = function (message, title, optionsOverride) {
        return this.notify({
            type: this.toastType.success,
            iconClass: this.options.iconClasses.success,
            message: message,
            optionsOverride: optionsOverride,
            title: title,
        });
    };
    Toastr.prototype.info = function (message, title, optionsOverride) {
        return this.notify({
            type: this.toastType.info,
            iconClass: this.options.iconClasses.info,
            message: message,
            optionsOverride: optionsOverride,
            title: title,
        });
    };
    Toastr.prototype.subscribe = function (callback) {
        this.listener = callback;
    };
    Toastr.prototype.publish = function (args) {
        if (!this.listener) {
            return;
        }
        this.listener(args);
    };
    Toastr.prototype.clear = function ($toastElement, clearOptions) {
        if (!this.$container) {
            this.getContainer(this.options);
        }
        if (!this.clearToast($toastElement, this.options, clearOptions)) {
            this.clearContainer(this.options);
        }
    };
    Toastr.prototype.remove = function ($toastElement) {
        if (!this.$container) {
            this.getContainer(this.options);
        }
        if (!this.$container) {
            return;
        }
        if ($toastElement && $toastElement !== document.activeElement) {
            this.removeToast($toastElement);
            return;
        }
        if (!this.$container.hasChildNodes()) {
            var parentNode = this.$container.parentElement;
            if (parentNode) {
                parentNode.removeChild(this.$container);
            }
        }
    };
    Toastr.prototype.removeToast = function ($toastElement) {
        if (!this.$container) {
            this.getContainer();
        }
        if (!this.$container) {
            return;
        }
        // todo set after visible state
        // as this will be a transition of css
        $toastElement.parentNode.removeChild($toastElement);
        // check if visible
        if ($toastElement.offsetWidth > 0 && $toastElement.offsetHeight > 0) {
            return;
        }
        // todo check if null makes sense
        // $toastElement = null;
        if (!this.$container.hasChildNodes()) {
            if (this.$container.parentNode) {
                this.$container.parentNode.removeChild(this.$container);
            }
            this.previousToast = null;
        }
    };
    Toastr.prototype.clearContainer = function (options) {
        if (!this.$container) {
            return;
        }
        var toastsToClear = this.$container.childNodes;
        for (var i = toastsToClear.length - 1; i >= 0; i--) {
            this.clearToast(toastsToClear[i], options);
        }
    };
    Toastr.prototype.clearToast = function ($toastElement, options, clearOptions) {
        if (options === void 0) { options = this.options; }
        if (clearOptions === void 0) { clearOptions = null; }
        var force = clearOptions && clearOptions.force ? clearOptions.force : false;
        if ($toastElement && (force || $toastElement !== document.activeElement)) {
            // todo hide effect
            this.removeToast($toastElement);
            // $toastElement[options.hideMethod]({
            //     duration: options.hideDuration,
            //     easing: options.hideEasing,
            //     complete: function () { removeToast($toastElement); }
            // });
            return true;
        }
        return false;
    };
    Toastr.prototype.notify = function (map) {
        var _this = this;
        var iconClass = map.iconClass || this.options.iconClass;
        var shouldExit = function (options, exitMap) {
            if (_this.options.preventDuplicates) {
                if (exitMap.message === _this.previousToast) {
                    return true;
                }
                _this.previousToast = exitMap.message;
            }
            return false;
        };
        if (typeof map.optionsOverride !== 'undefined') {
            this.options = merge_1.default({}, this.options, map.optionsOverride);
            iconClass = map.optionsOverride.iconClass || iconClass;
        }
        if (shouldExit(this.options, map)) {
            return null;
        }
        this.toastId += 1;
        this.$container = this.getContainer(this.options, true);
        var intervalId = null;
        var $toastElement = document.createElement('div');
        var $titleElement = document.createElement('div');
        var $messageElement = document.createElement('div');
        var $progressElement = document.createElement('div');
        var createdElement = document.createElement('div');
        createdElement.innerHTML = this.options.closeHtml.trim();
        var $closeElement = createdElement.firstChild;
        var progressBar = {
            intervalId: null,
            hideEta: null,
            maxHideTime: null,
        };
        var response = {
            toastId: this.toastId,
            state: 'visible',
            startTime: new Date(),
            endTime: undefined,
            options: this.options,
            map: map,
        };
        var hideToast = function (override) {
            // const method = override && this.options.closeMethod !== false
            //   ? this.options.closeMethod
            //   : this.options.hideMethod;
            if (override === void 0) { override = null; }
            // const duration = override && this.options.closeDuration !== false
            //   ? this.options.closeDuration
            //   : this.options.hideDuration;
            // const easing = override && this.options.closeEasing !== false
            //   ? this.options.closeEasing
            //   : this.options.hideEasing;
            if ($toastElement === document.activeElement && !override) {
                return;
            }
            clearTimeout(progressBar.intervalId);
            // todo fade out toast
            _this.removeToast($toastElement);
            clearTimeout(intervalId);
            if (_this.options.onHidden && response.state !== 'hidden') {
                _this.options.onHidden();
            }
            response.state = 'hidden';
            response.endTime = new Date();
            _this.publish(response);
            // return $toastElement[method]({
            //     duration: duration,
            //     easing: easing,
            // });
        };
        var escapeHtml = function (source) {
            var newSource = source !== null ? source : '';
            return newSource
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        };
        var setAria = function () {
            var ariaValue = '';
            switch (map.iconClass) {
                case 'toast-success':
                case 'toast-info':
                    ariaValue = 'polite';
                    break;
                default:
                    ariaValue = 'assertive';
            }
            $toastElement.setAttribute('aria-live', ariaValue);
        };
        var delayedHideToast = function () {
            if (_this.options.timeOut > 0 || _this.options.extendedTimeOut > 0) {
                intervalId = setTimeout(hideToast, _this.options.extendedTimeOut);
                progressBar.maxHideTime = _this.options.extendedTimeOut;
                progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
            }
        };
        var stickAround = function () {
            clearTimeout(intervalId);
            progressBar.hideEta = 0;
            // todo
            // $toastElement.stop(true, true)[this.options.showMethod](
            //     {duration: this.options.showDuration, easing: this.options.showEasing}
            // );
        };
        var handleEvents = function () {
            if (_this.options.closeOnHover) {
                $toastElement.addEventListener('mouseenter', stickAround);
                $toastElement.addEventListener('mouseleave', delayedHideToast);
            }
            if (!_this.options.onclick && _this.options.tapToDismiss) {
                $toastElement.addEventListener('click', hideToast);
            }
            if (_this.options.closeButton && $closeElement) {
                $closeElement.addEventListener('click', function (event) {
                    if (event.stopPropagation) {
                        event.stopPropagation();
                    }
                    else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {
                        // eslint-disable-next-line no-param-reassign
                        event.cancelBubble = true;
                    }
                    if (_this.options.onCloseClick) {
                        _this.options.onCloseClick(event);
                    }
                    hideToast(true);
                });
            }
            if (_this.options.onclick) {
                $toastElement.addEventListener('click', function (event) {
                    // ts needs another check here
                    if (_this.options.onclick) {
                        _this.options.onclick(event);
                    }
                    hideToast();
                });
            }
        };
        var setTitle = function () {
            if (map.title) {
                var suffix = map.title;
                if (_this.options.escapeHtml) {
                    suffix = escapeHtml(map.title);
                }
                $titleElement.innerHTML = suffix;
                $titleElement.classList.add(_this.options.titleClass);
                $toastElement.appendChild($titleElement);
            }
        };
        var setMessage = function () {
            if (map.message) {
                var suffix = map.message;
                if (_this.options.escapeHtml) {
                    suffix = escapeHtml(map.message);
                }
                $messageElement.innerHTML = suffix;
                $messageElement.classList.add(_this.options.messageClass);
                $toastElement.appendChild($messageElement);
            }
        };
        var setCloseButton = function () {
            if (_this.options.closeButton) {
                $closeElement.classList.add(_this.options.closeClass);
                $closeElement.setAttribute('role', 'button');
                $toastElement.insertBefore($closeElement, $toastElement.firstChild);
            }
        };
        var setProgressBar = function () {
            if (_this.options.progressBar) {
                $progressElement.classList.add(_this.options.progressClass);
                $toastElement.insertBefore($progressElement, $toastElement.firstChild);
            }
        };
        var setRTL = function () {
            if (_this.options.rtl) {
                $toastElement.classList.add('rtl');
            }
        };
        var setIcon = function () {
            if (map.iconClass) {
                $toastElement.classList.add(_this.options.toastClass, iconClass);
            }
        };
        var setSequence = function () {
            if (!_this.$container) {
                return;
            }
            if (_this.options.newestOnTop) {
                _this.$container.insertBefore($toastElement, _this.$container.firstChild);
            }
            else {
                _this.$container.appendChild($toastElement);
            }
        };
        var updateProgress = function () {
            var percentage = ((progressBar.hideEta - (new Date().getTime()))
                / progressBar.maxHideTime) * 100;
            $progressElement.style.width = percentage + "%";
        };
        var displayToast = function () {
            // todo hide toast
            // $toastElement.hide();
            // todo fade out toast
            if (_this.options.onShown) {
                _this.options.onShown();
            }
            // $toastElement[this.options.showMethod](
            // eslint-disable-next-line
            //     {duration: this.options.showDuration, easing: this.options.showEasing, complete: this.options.onShown}
            // );
            if (_this.options.timeOut > 0) {
                intervalId = setTimeout(hideToast, _this.options.timeOut);
                progressBar.maxHideTime = _this.options.timeOut;
                progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                if (_this.options.progressBar) {
                    progressBar.intervalId = setInterval(updateProgress, 10);
                }
            }
        };
        var personalizeToast = function () {
            setIcon();
            setTitle();
            setMessage();
            setCloseButton();
            setProgressBar();
            setRTL();
            setSequence();
            setAria();
        };
        personalizeToast();
        displayToast();
        handleEvents();
        this.publish(response);
        if (this.options.debug && console) {
            console.log(response);
        }
        return $toastElement;
    };
    return Toastr;
}());
exports.default = Toastr;
//# sourceMappingURL=Toastr2.js.map