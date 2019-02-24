"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProgressBar = /** @class */ (function () {
    function ProgressBar(toastElement, progressClass) {
        if (progressClass === void 0) { progressClass = ''; }
        this.hideEta = 0;
        this.maxHideTime = 0;
        this.previousTimeout = 0;
        this.toastElement = toastElement;
        this.progressElement = document.createElement('div');
        this.progressElement.classList.add(progressClass);
        this.toastElement.insertBefore(this.progressElement, this.toastElement.firstChild);
    }
    ProgressBar.prototype.update = function () {
        var percentage = ((this.hideEta - (new Date().getTime()))
            / this.maxHideTime) * 100;
        this.progressElement.style.width = percentage + "%";
    };
    ProgressBar.prototype.start = function () {
        var _this = this;
        this.reset(this.previousTimeout);
        this.intervalId = setInterval(function () { return _this.update(); }, 10);
    };
    ProgressBar.prototype.resetWidth = function () {
        this.progressElement.style.width = '0%';
    };
    ProgressBar.prototype.stop = function () {
        this.maxHideTime = 0;
        this.hideEta = 0;
        this.resetWidth();
        clearInterval(this.intervalId);
    };
    ProgressBar.prototype.reset = function (timeout) {
        this.previousTimeout = timeout;
        this.maxHideTime = timeout;
        this.hideEta = new Date().getTime() + this.maxHideTime;
    };
    return ProgressBar;
}());
exports.default = ProgressBar;
//# sourceMappingURL=ProgressBar.js.map