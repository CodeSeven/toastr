/// <reference path="../../../toastr.js" />
/// <reference path="../qunit/qunit.js" />
(function () {
    var iconClasses = {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning'
    };
    var positionClasses = {
        topRight: 'toast-top-right',
        bottomRight: 'toast-bottom-right',
        bottomLeft: 'toast-bottom-left',
        topLeft: 'toast-top-left',
        topCenter: 'toast-top-center',
        bottomCenter: 'toast-bottom-center'
    };
    var sampleMsg = 'I don\'t think they really exist';
    var sampleTitle = 'TEST';
    var selectors = {
        container: 'div#toast-container',
        toastInfo: 'div#toast-container > div.toast-info',
        toastWarning: 'div#toast-container > div.toast-success',
        toastError: 'div#toast-container > div.toast-error',
        toastSuccess: 'div#toast-container > div.toast-success'
    };

    toastr.options = {
        timeOut: 2000,
        extendedTimeOut: 0,
        fadeOut: 0,
        fadeIn: 0,
        showDuration: 0,
        hideDuration: 0,
        debug: false
    };

    var delay = toastr.options.timeOut + 500;


    function resetContainer() {
        var $container = toastr.getContainer();
        if ($container) {
            $container.remove();
        }
        $(selectors.container).remove();
        clearContainerChildren();
    }

    function clearContainerChildren() {
        toastr.clear();
    }

})();
