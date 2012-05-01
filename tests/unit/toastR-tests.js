/// <reference path="../../toastr.js" />
/// <reference path="../qunit/qunit.js" />
(function ($, toastR) {

	var 
		iconClasses = {
			error: 'toast-error',
			info: 'toast-info',
			success: 'toast-success',
			warning: 'toast-warning'
		},
		positionClasses = {
			topRight: 'toast-top-right',
			bottomRight: 'toast-bottom-right',
			bottomLeft: 'toast-bottom-left',
			topLeft: 'toast-top-left'
		},
		sampleMsg = 'I don\'t think they really exist',
		sampleTitle = 'ROUS',
		selectors = {
			container: 'div#toast-container',
			toastInfo: 'div#toast-container > div.toast-info',
			toastWarning: 'div#toast-container > div.toast-success',
			toastError: 'div#toast-container > div.toast-error',
			toastSuccess: 'div#toast-container > div.toast-success'
		}

		//toastR.options.timeOut = 0
		toastR.options.debug = true

    module('info')
    test('info - pass title and message', 3, function () {
	    //Arrange
	    //Act
	    var $toast = toastR.info(sampleMsg, sampleTitle)
	    //Assert
	    equal($toast.find('div.toast-title').html(), sampleTitle, 'Sets title')
	    equal($toast.find('div.toast-message').html(), sampleMsg, 'Sets message')
	    ok($toast.hasClass(iconClasses.info), 'Sets info icon')
	    //Teardown
	    $toast.remove();
    })

	test('info - pass message, but no title', 3, function () {
		//Arrange
		//Act
		var $toast = toastR.info(sampleMsg)
		//Assert
		equal($toast.find('div.toast-title').length, 0, 'Sets null title')
		equal($toast.find('div.toast-message').html(), sampleMsg, 'Sets message')
		ok($toast.hasClass(iconClasses.info), 'Sets info icon')
		//Teardown
		$toast.remove()
	})

	test('info - pass no message nor title', 3, function () {
		//Arrange
		//Act
		var $toast = toastR.info()
		//Assert
		equal($toast.find('div.toast-title').length, 0, 'Sets null title')
		equal($toast.find('div.toast-message').html(), null, 'Sets message')
		ok($toast.hasClass(iconClasses.info), 'Sets info icon')
		//Teardown
		$toast.remove()
	})

    module('warning')
    test('warning - pass message and title', 3, function () {
		    //Arrange
		    //Act
		    var $toast = toastR.warning(sampleMsg, sampleTitle)
		    //Assert
		    equal($toast.find('div.toast-title').html(), sampleTitle, 'Sets title')
		    equal($toast.find('div.toast-message').html(), sampleMsg, 'Sets message')
		    ok($toast.hasClass(iconClasses.warning), 'Sets warning icon')
		    //Teardown
		    $toast.remove()
	    })

	test('warning - pass message, but no title', 3, function () {
		//Arrange
		//Act
		var $toast = toastR.warning(sampleMsg)
		//Assert
		equal($toast.find('div.toast-title').length, 0, 'Sets empty title')
		equal($toast.find('div.toast-message').html(), sampleMsg, 'Sets message')
		ok($toast.hasClass(iconClasses.warning), 'Sets warning icon')
		//Teardown
		$toast.remove()
	})

	test('warning - no message nor title', 3, function () {
		//Arrange
		//Act
		var $toast = toastR.warning('')
		//Assert
		equal($toast.find('div.toast-title').length, 0, 'Sets null title')
		equal($toast.find('div.toast-message').length, 0, 'Sets empty message')
		ok($toast.hasClass(iconClasses.warning), 'Sets warning icon')
		//Teardown
		$toast.remove()
	})

    module('error')
    test('error - pass message and title', 3, function () {
		//Arrange
		//Act
		var $toast = toastR.error(sampleMsg, sampleTitle)
		//Assert
		equal($toast.find('div.toast-title').html(), sampleTitle, 'Sets title')
		equal($toast.find('div.toast-message').html(), sampleMsg, 'Sets message')
		ok($toast.hasClass(iconClasses.error), 'Sets error icon')
		//Teardown
		$toast.remove()
	})

	test('error - pass message, but no title', 3, function () {
		//Arrange
		//Act
		var $toast = toastR.error(sampleMsg)
		//Assert
		equal($toast.find('div.toast-title').length, 0, 'Sets empty title')
		equal($toast.find('div.toast-message').html(), sampleMsg, 'Sets message')
		ok($toast.hasClass(iconClasses.error), 'Sets error icon')
		//Teardown
		$toast.remove()
	})

	test('error - no message nor title', 3, function () {
		//Arrange
		//Act
		var $toast = toastR.error('')
		//Assert
		equal($toast.find('div.toast-title').length, 0, 'Sets empty title')
		equal($toast.find('div.toast-message').length, 0, 'Sets empty message')
		ok($toast.hasClass(iconClasses.error), 'Sets error icon')
		//Teardown
		$toast.remove()
	})

    module('success')
    test('success - pass message and title', 3, function () {
		//Arrange
		//Act
		var $toast = toastR.success(sampleMsg, sampleTitle)
		//Assert
		equal($toast.find('div.toast-title').html(), sampleTitle, 'Sets title')
		equal($toast.find('div.toast-message').html(), sampleMsg, 'Sets message')
		ok($toast.hasClass(iconClasses.success), 'Sets success icon')
		//Teardown
		$toast.remove()
	})

	test('success - pass message, but no title', 3, function () {
		//Arrange
		//Act
		var $toast = toastR.success(sampleMsg)
		//Assert
		equal($toast.find('div.toast-title').length, 0, 'Sets empty title')
		equal($toast.find('div.toast-message').html(), sampleMsg, 'Sets message')
		ok($toast.hasClass(iconClasses.success), 'Sets success icon')
		//Teardown
		$toast.remove()
	})

	test('success - no message nor title', 3, function () {
		//Arrange
		//Act
		var $toast = toastR.success('')
		//Assert
		equal($toast.find('div.toast-title').length, 0, 'Sets null title')
		equal($toast.find('div.toast-message').length, 0, 'Sets empty message')
		ok($toast.hasClass(iconClasses.success), 'Sets success icon')
		//Teardown
		$toast.remove()
	})

    module('positioning')
    test('Container - position top-right', 1, function () {
		//Arrange
		$(selectors.container).remove()
		toastR.options.positionClass = positionClasses.topRight
		//Act
		var $toast = toastR.success(sampleMsg)
		var $container = $(selectors.container)
		//Assert
		ok($container.hasClass(positionClasses.topRight), 'Has position top right')
		//Teardown
		$toast.remove()
		$container.remove();
	})

	test('Container - position bottom-right', 1, function () {
		//Arrange
		$(selectors.container).remove()
		toastR.options.positionClass = positionClasses.bottomRight
		//Act
		var $toast = toastR.success(sampleMsg)
		var $container = $(selectors.container)
		//Assert
		ok($container.hasClass(positionClasses.bottomRight), 'Has position bottom right')
		//Teardown
		$toast.remove()
		$container.remove();
	})

	test('Container - position bottom-left', 1, function () {
		//Arrange
		$(selectors.container).remove()
		toastR.options.positionClass = positionClasses.bottomLeft
		//Act
		var $toast = toastR.success(sampleMsg)
		var $container = $(selectors.container)
		//Assert
		ok($container.hasClass(positionClasses.bottomLeft), 'Has position bottom left')
		//Teardown
		$toast.remove()
		$container.remove();
	})
	
	test('Container - position top-left', 1, function () {
		//Arrange
		$(selectors.container).remove()
		toastR.options.positionClass = positionClasses.topLeft
		//Act
		var $toast = toastR.success(sampleMsg)
		var $container = $(selectors.container)
		//Assert
		ok($container.hasClass(positionClasses.topLeft), 'Has position top left')
		//Teardown
		$toast.remove()
		$container.remove();
	})



})(jQuery, toastR)
