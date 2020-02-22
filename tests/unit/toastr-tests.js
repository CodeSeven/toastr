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

    module('subscription');
    asyncTest('subscribe - triggers 2 visible and 2 hidden response notifications while clicking on a toast', 1, function () {
        //Arrange
        var $toast = [];
        var expectedReponses = [];
        //Act
        toastr.subscribe(function(response) {
          if(response.options.testId) {
            expectedReponses.push(response);
          }
        })

        $toast[0] = toastr.info(sampleMsg, sampleTitle, {testId : 1});
        $toast[1] = toastr.info(sampleMsg, sampleTitle, {testId : 2});

        $toast[1].click()

        setTimeout(function () {
            // Assert
            ok(expectedReponses.length === 4);
            //Teardown
            clearContainerChildren();
            toastr.subscribe(null);
            start();
        }, delay);
    });

    module('order of appearance');
    test('Newest toast on top', 1, function () {
        //Arrange
        resetContainer();
        toastr.options.newestOnTop = true;
        //Act
        var $first = toastr.success("First toast");
        var $second = toastr.success("Second toast");
        //Assert
        var containerHtml = toastr.getContainer().html();
        ok(containerHtml.indexOf("First toast") > containerHtml.indexOf("Second toast"), 'Newest toast is on top');
        //Teardown
        $first.remove();
        $second.remove();
        resetContainer();
    });

    test('Oldest toast on top', 1, function () {
        //Arrange
        resetContainer();
        toastr.options.newestOnTop = false;
        //Act
        var $first = toastr.success("First toast");
        var $second = toastr.success("Second toast");
        //Assert
        var containerHtml = toastr.getContainer().html();
        ok(containerHtml.indexOf("First toast") < containerHtml.indexOf("Second toast"), 'Oldest toast is on top');
        //Teardown
        $first.remove();
        $second.remove();
        resetContainer();
    });

    // These must go last
    module('positioning');
    test('Container - position top-right', 1, function () {
        //Arrange
        resetContainer();
        toastr.options.positionClass = positionClasses.topRight;
        //Act
        var $toast = toastr.success(sampleMsg);
        var $container = toastr.getContainer();
        //Assert
        ok($container.hasClass(positionClasses.topRight), 'Has position top right');
        //Teardown
        $toast.remove();
        resetContainer();
    });
    test('Container - position bottom-right', 1, function () {
        //Arrange
        resetContainer();
        toastr.options.positionClass = positionClasses.bottomRight;
        //Act
        var $toast = toastr.success(sampleMsg);
        var $container = toastr.getContainer();
        //Assert
        ok($container.hasClass(positionClasses.bottomRight), 'Has position bottom right');
        //Teardown
        $toast.remove();
        resetContainer();
    });
    test('Container - position bottom-left', 1, function () {
        //Arrange
        resetContainer();
        //$(selectors.container).remove()
        toastr.options.positionClass = positionClasses.bottomLeft;
        //Act
        var $toast = toastr.success(sampleMsg);
        var $container = toastr.getContainer();
        //Assert
        ok($container.hasClass(positionClasses.bottomLeft), 'Has position bottom left');
        //Teardown
        $toast.remove();
        resetContainer();
    });
    test('Container - position top-left', 1, function () {
        //Arrange
        resetContainer();
        toastr.options.positionClass = positionClasses.topLeft;
        //Act
        var $toast = toastr.success(sampleMsg);
        var $container = toastr.getContainer();
        //Assert
        ok($container.hasClass(positionClasses.topLeft), 'Has position top left');
        //Teardown
        $toast.remove();
        resetContainer();
    });
    test('Container - position top-center', 1, function () {
        //Arrange
        resetContainer();
        toastr.options.positionClass = positionClasses.topCenter;
        //Act
        var $toast = toastr.success(sampleMsg);
        var $container = toastr.getContainer();
        //Assert
        ok($container.hasClass(positionClasses.topCenter), 'Has position top center');
        //Teardown
        $toast.remove();
        resetContainer();
    });
    test('Container - position bottom-center', 1, function () {
        //Arrange
        resetContainer();
        toastr.options.positionClass = positionClasses.bottomCenter;
        //Act
        var $toast = toastr.success(sampleMsg);
        var $container = toastr.getContainer();
        //Assert
        ok($container.hasClass(positionClasses.bottomCenter), 'Has position bottom center');
        //Teardown
        $toast.remove();
        resetContainer();
    });

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
