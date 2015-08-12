// var assert = require("assert")
// var chai = require("chai");
var expect = chai.expect;

// var fs = require('fs');
// var vm = require('vm');
// var path = './dist/toastr.js';

// var code = fs.readFileSync(path);
// vm.runInThisContext(code);

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
var sampleTitle = 'ROUS';
var selectors = {
    container: 'div#toast-container',
    toastInfo: 'div#toast-container > div.toast-info',
    toastWarning: 'div#toast-container > div.toast-success',
    toastError: 'div#toast-container > div.toast-error',
    toastSuccess: 'div#toast-container > div.toast-success'
};

var delay;

function resetContainer(t) {
    var $container = t.getContainer();
    if ($container) {
        $container.remove();
    }
    // $(selectors.container).remove();
    clearContainerChildren(t);
}

function clearContainerChildren(t) {
    t.clear();
}

describe('Toastr Unit Tests', function() {

	var t;

	beforeEach(function(){
		t = new toastr();

		t.options = {
		    timeOut: 2000,
		    extendedTimeOut: 0,
		    fadeOut: 0,
		    fadeIn: 0,
		    showDuration: 0,
		    hideDuration: 0,
		    debug: false
		};

		delay = t.options.timeOut + 500;
		// console.log(t);
	});

	afterEach(function(){
		/*
		var $container = t.getContainer();
	    if ($container) {
	        $container.remove();
	    }
	    // $(selectors.container).remove();
		t.clear();
		t = undefined;*/
		// resetContainer(t);
	});

	describe('Clear tests', function () {
		

		it('clear - show 3 toasts, clear the 2nd', function (done) {
			//Arrange
		    var $toast = [];
		    $toast[0] = t.info(sampleMsg, sampleTitle + '-1');
		    $toast[1] = t.info(sampleMsg, sampleTitle + '-2');
		    $toast[2] = t.info(sampleMsg, sampleTitle + '-3');
		    var $container = t.getContainer();
		    //Act
		    console.log($toast[1]);
		    t.clear($toast[1]); // I have to force the removal. v2 doesn't have this requirement.
		    
		    //Assert
		    // setTimeout(function () {
		        //debugger;
		        //console.log($container.children().length);
		        expect($container).to.exist;
		        expect($container.children).to.have.length(2);
		        // resetContainer(t);
		        done();
		        //Teardown
				
		        // start();
		    // }, 1000);


		});

		it('clear - show 3 toasts, clear all 3, 0 left', function (done) {
        //Arrange
	        var $toast = [];
	        $toast[0] = t.info(sampleMsg, sampleTitle + '-1');
	        $toast[1] = t.info(sampleMsg, sampleTitle + '-2');
	        $toast[2] = t.info(sampleMsg, sampleTitle + '-3');
	        var $container = t.getContainer();
	        //Act
	        t.clear();
	        // resetContainer(t);
	        //Assert
	        
	        expect($container).to.exist;
	        expect($container.children).to.have.length(0);
	            //Teardown
	            
	            // start();
	        done();
	        
		});

		it('clear - after clear with force option toast with focus disappears', function(done){
			var $toast = [];

			var msg = sampleMsg + '<br/><br/><button type="button">Clear</button>';

			$toast = t.info(msg, sampleTitle + "-1");
			// jQuery.find('button')[0].focus(); // TODO why do we need focus on the button? We don't use .remove()
			t.clear($toast, {force: true});

			var $container = t.getContainer();

			expect($container).to.not.exist;
	        expect($container).to.have.be.null; // TODO validate that this against the v2 test is in fact accurate expectation

	        done();
		});

		it('clear and show - show 2 toasts, clear both, then show 1 more', function(done){
			var $toast = [];

	        $toast[0] = t.info(sampleMsg, sampleTitle + '-1');
	        $toast[1] = t.info(sampleMsg, sampleTitle + '-2');
	        var $container = t.getContainer();
	        t.clear();
        
            $toast[2] = t.info(sampleMsg, sampleTitle + '-3-Visible');
            //Assert
            var toast2jQuery = jQuery($toast[2]);
            expect(toast2jQuery.find('div.toast-title').html()).to.contain(sampleTitle + '-3-Visible');
            
            expect(toast2jQuery.length).to.be.equal(1);
            expect(jQuery(selectors.container).length).to.equal(1);
            //Teardown
            // resetContainer();
            // start();
            done();
		});

		it('clear and show - clear removes toast container', function(done){
			var $toast = [];
        	$toast[0] = t.info(sampleMsg, sampleTitle + '-1');
        	$toast[1] = t.info(sampleMsg, sampleTitle + '-2');
        	var $container = t.getContainer();
        	t.clear();
        
        
            //Assert
            expect(jQuery(selectors.container).length).to.equal(0);
            // expect(!jQuery($toast[1]).length).to.be.false; // TODO what's the point?
            //Teardown
            // resetContainer();
            // start();
        	done();
		});

		it('clear and show - after clear new toast creates container', function(done){
			var $toast = [];
        	$toast[0] = t.info(sampleMsg, sampleTitle + '-1');
        	$toast[1] = t.info(sampleMsg, sampleTitle + '-2');
        	var $container = t.getContainer();
        	t.clear();
        
            $toast[2] = t.info(sampleMsg, sampleTitle + '-3-Visible');
            //Assert
            expect(jQuery(selectors.container).find('div.toast-title').html()).to.contain(sampleTitle + '-3-Visible');
            // resetContainer();
            // start();
            done();
		});

		it('clear and show - after clear all toasts new toast still appears', function(done){
			//Arrange
	        var $toast = [];
	        //Act
	        $toast[0] = t.info(sampleMsg, sampleTitle + '-1');
	        $toast[1] = t.info(sampleMsg, sampleTitle + '-2');
	        t.clear();
	        $toast[2] = t.info(sampleMsg, sampleTitle + '-3-Visible');
	        //Assert
	        expect(jQuery($toast[2]).length).to.be.equal(1);
	        //Teardown
	        // resetContainer();
	        done();
		});
	});

	describe('Info tests', function(){

		it('info - pass title and message', function(done){
			var $toast = t.info(sampleMsg, sampleTitle);
	        
	        expect(jQuery($toast).find('div.toast-title').html()).to.contain(sampleTitle);
	        expect(jQuery($toast).find('div.toast-message').html()).to.contain(sampleMsg);
	        expect(jQuery($toast).hasClass(iconClasses.info)).to.be.true;
	        
	        $toast.remove();
	        // clearContainerChildren();

	        done();
		});

		it('info - pass message, but no title', function(done){
			var $toast = t.info(sampleMsg);
	        //Assert
	        expect(jQuery($toast).find('div.toast-title').length).to.be.equal(0);
	        expect(jQuery($toast).find('div.toast-message').html()).to.contain(sampleMsg);
	        expect(jQuery($toast).hasClass(iconClasses.info)).to.be.true;
	        //Teardown
	        $toast.remove();
	        // clearContainerChildren();
	        done();
		});

		it('info - pass no message nor title', function(done){
			var $toast = t.info(); //Assert
        	
        	expect(jQuery($toast).find('div.toast-title').length).to.equal(0);
        	expect(jQuery($toast).find('div.toast-message').html()).to.be.undefined;
        	expect(jQuery($toast).hasClass(iconClasses.info)).to.be.true;
        	//Teardown
        	$toast.remove();
        	// clearContainerChildren();
        	done();
		});
	});

	describe('Warning tests', function(done){
		it('warning - pass message and title', function(done){
			var $toast = t.warning(sampleMsg, sampleTitle);
	        //Assert
	        // equal($toast.find('div.toast-title').html(), sampleTitle, 'Sets title');
	        // equal($toast.find('div.toast-message').html(), sampleMsg, 'Sets message');
	        // ok($toast.hasClass(iconClasses.warning), 'Sets warning icon');
	        //Teardown
	        $toast.remove();
	        clearContainerChildren();

			done();
		});

		it('warning - pass message, but no title', function(done){
			var $toast = toastr.warning(sampleMsg);
	        //Assert
	        equal($toast.find('div.toast-title').length, 0, 'Sets empty title');
	        equal($toast.find('div.toast-message').html(), sampleMsg, 'Sets message');
	        ok($toast.hasClass(iconClasses.warning), 'Sets warning icon');
	        //Teardown
	        $toast.remove();
	        clearContainerChildren();
	        done();
		});

		it('warning - no message nor title', function(done){
			var $toast = toastr.warning('');
	        //Assert
	        equal($toast.find('div.toast-title').length, 0, 'Sets null title');
	        equal($toast.find('div.toast-message').length, 0, 'Sets empty message');
	        ok($toast.hasClass(iconClasses.warning), 'Sets warning icon');
	        //Teardown
	        $toast.remove();
	        clearContainerChildren();
	        done();
		});
	});

	describe('Error tests', function(){
		it('error - pass message and title', function(done){
			var $toast = toastr.error(sampleMsg, sampleTitle);
	        //Assert
	        equal($toast.find('div.toast-title').html(), sampleTitle, 'Sets title');
	        equal($toast.find('div.toast-message').html(), sampleMsg, 'Sets message');
	        ok($toast.hasClass(iconClasses.error), 'Sets error icon');
	        //Teardown
	        $toast.remove();
	        clearContainerChildren();
	        done();
		});

		it('error - pass message, but no title', function(done){
			var $toast = toastr.error(sampleMsg); //Assert
	        equal($toast.find('div.toast-title').length, 0, 'Sets empty title');
	        equal($toast.find('div.toast-message').html(), sampleMsg, 'Sets message');
	        ok($toast.hasClass(iconClasses.error), 'Sets error icon');
	        //Teardown
	        $toast.remove();
	        clearContainerChildren();
	        done();
		});

		it('error - no message nor title', function(done){
			var $toast = toastr.error('');
	        //Assert
	        equal($toast.find('div.toast-title').length, 0, 'Sets empty title');
	        equal($toast.find('div.toast-message').length, 0, 'Sets empty message');
	        ok($toast.hasClass(iconClasses.error), 'Sets error icon');
	        //Teardown
	        $toast.remove();
	        clearContainerChildren();
	        done();
		});
	});

	describe('Success tests', function(){
		it('success - pass message and title', function(done){
			var $toast = toastr.success(sampleMsg, sampleTitle);
	        //Assert
	        equal($toast.find('div.toast-title').html(), sampleTitle, 'Sets title');
	        equal($toast.find('div.toast-message').html(), sampleMsg, 'Sets message');
	        ok($toast.hasClass(iconClasses.success), 'Sets success icon');
	        //Teardown
	        $toast.remove();
	        clearContainerChildren();
	        done();
		});

		it('success - pass message, but no title', function(done){
			var $toast = toastr.success(sampleMsg);
	        //Assert
	        equal($toast.find('div.toast-title').length, 0, 'Sets empty title');
	        equal($toast.find('div.toast-message').html(), sampleMsg, 'Sets message');
	        ok($toast.hasClass(iconClasses.success), 'Sets success icon');
	        //Teardown
	        $toast.remove();
	        clearContainerChildren();
	        done();
		});

		it('success - no message nor title', function(done){
			//Arrange
	        //Act
	        var $toast = toastr.success('');
	        //Assert
	        equal($toast.find('div.toast-title').length, 0, 'Sets null title');
	        equal($toast.find('div.toast-message').length, 0, 'Sets empty message');
	        ok($toast.hasClass(iconClasses.success), 'Sets success icon'); //Teardown
	        $toast.remove();
	        clearContainerChildren();
	        done();
		});
	});

	describe('Close Button tests', function(){
		beforeEach(function(){
			t.options.closeButton = false;
		});

		it('close button disabled', function (done) {
	        //Arrange
	        toastr.options.closeButton = false;
	        //Act
	        var $toast = toastr.success('');
	        //Assert
	        equal($toast.find('button.toast-close-button').length, 0, 'close button should not exist with closeButton=false');
	        //Teardown
	        $toast.remove();
	        clearContainerChildren();
	        done();
	    });

	    it('close button enabled', function (done) {
	        //Arrange
	        toastr.options.closeButton = true;
	        //Act
	        var $toast = toastr.success('');
	        //Assert
	        equal($toast.find('button.toast-close-button').length, 1, 'close button should exist with closeButton=true');
	        //Teardown
	        $toast.remove();
	        clearContainerChildren();
	        done();
	    });

	    it('close button has type=button', function (done) {
	        //Arrange
	        toastr.options.closeButton = true;
	        //Act
	        var $toast = toastr.success('');
	        //Assert
	        equal($toast.find('button[type="button"].toast-close-button').length, 1, 'close button should have type=button');
	        //Teardown
	        $toast.remove();
	        clearContainerChildren();
	        done();
	    });
	});

	describe('Progress Bar tests', function(){
		beforeEach(function(){
			t.options.progressBar = false;
		});

		it('progress bar disabled', function (done) {
	        //Arrange
	        toastr.options.progressBar = false;
	        //Act
	        var $toast = toastr.success('');
	        //Assert
	        equal($toast.find('div.toast-progress').length, 0, 'progress bar should not exist with progressBar=false');
	        //Teardown
	        $toast.remove();
	        clearContainerChildren();
	        done();
	    });

	    it('progress bar enabled', function (done) {
	        //Arrange
	        toastr.options.progressBar = true;
	        //Act
	        var $toast = toastr.success('');
	        //Assert
	        equal($toast.find('div.toast-progress').length, 1, 'progress bar should exist with progressBar=true');
	        //Teardown
	        $toast.remove();
	        clearContainerChildren();
	        done();
	    });
	});

	describe('Event tests', function(){
		it('event - onShown is executed', function (done) {
	        // Arrange
	        var run = false;
	        var onShown = function () { run = true; };
	        toastr.options.onShown = onShown;
	        // Act
	        var $toast = toastr.success(sampleMsg, sampleTitle);
	        
            // Assert
            ok(run);
            //Teardown
            $toast.remove();
            clearContainerChildren();
            start();
            done();
	        
	    });

	    it('event - onHidden is executed', function (done) {
	        //Arrange
	        var run = false;
	        var onHidden = function () { run = true; };
	        toastr.options.onHidden = onHidden;
	        toastr.options.timeOut = 1;
	        //Act
	        var $toast = toastr.success(sampleMsg, sampleTitle);
	        
            // Assert
            ok(run); //Teardown
            $toast.remove();
            clearContainerChildren();
            start();
	        done();
	    });

	    it('event - onShown and onHidden are both executed', function (done) {
	        //Arrange
	        var onShowRun = false;
	        var onHideRun = false;
	        var onShow = function () { onShowRun = true; };
	        var onHide = function () { onHideRun = true; };
	        toastr.options.onShown = onShow;
	        toastr.options.onHidden = onHide;
	        toastr.options.timeOut = 1;
	        //Act
	        var $toast = toastr.success(sampleMsg, sampleTitle);
	        
            // Assert
            ok(onShowRun);
            ok(onHideRun);
            //Teardown
            $toast.remove();
            clearContainerChildren();
            start();
	        done();
	    });

	    it('event - message appears when no show or hide method functions provided', function (done) {
	        //Arrange
	        //Act
	        var $toast = toastr.success(sampleMsg, sampleTitle);
	        //Assert
	        ok($toast.hasClass(iconClasses.success), 'Sets success icon');
	        //Teardown
	        $toast.remove();
	        clearContainerChildren();
	        done();
	    });

	    it('event - prevent duplicate sequential toasts.', function(done){
	        toastr.options.preventDuplicates = true;

	        var $toast = [];
	        $toast[0] = toastr.info(sampleMsg, sampleTitle);
	        $toast[1] = toastr.info(sampleMsg, sampleTitle);
	        $toast[2] = toastr.info(sampleMsg + " 1", sampleTitle);
	        $toast[3] = toastr.info(sampleMsg, sampleTitle);
	        var $container = toastr.getContainer();

	        ok($container && $container.children().length === 3);

	        clearContainerChildren();
	        done();
	    });

	    it('event - prevent duplicate sequential toasts, but allow previous after clear.', function(done){
	        toastr.options.preventDuplicates = true;

	        var $toast = [];
	        $toast[0] = toastr.info(sampleMsg, sampleTitle);
	        $toast[1] = toastr.info(sampleMsg, sampleTitle);
	        clearContainerChildren();
	        $toast[3] = toastr.info(sampleMsg, sampleTitle);
	        var $container = toastr.getContainer();

	        ok($container && $container.children().length === 1);

	        clearContainerChildren();
	        done();
	    });

	    it('event - allow duplicate sequential toasts.', function(done){
	        toastr.options.preventDuplicates = false;

	        var $toast = [];
	        $toast[0] = toastr.info(sampleMsg, sampleTitle);
	        $toast[1] = toastr.info(sampleMsg, sampleTitle);
	        $toast[1] = toastr.info(sampleMsg, sampleTitle);
	        var $container = toastr.getContainer();

	        ok($container && $container.children().length === 3);

	        clearContainerChildren();
	        done();
	    });

	    it('event - allow preventDuplicates option to be overridden.', function(done) {
	        var $toast = [];

	        $toast[0] = toastr.info(sampleMsg, sampleTitle, {
	            preventDuplicates: true
	        });
	        $toast[1] = toastr.info(sampleMsg, sampleTitle, {
	            preventDuplicates: true
	        });
	        $toast[2] = toastr.info(sampleMsg, sampleTitle);
	        var $container = toastr.getContainer();

	        ok($container && $container.children().length === 2);
	        clearContainerChildren();
	        done();
	    });
	});

	describe('Order of Appearance tests', function(){
		it('Newest toast on top', function (done) {
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
	        done();
	    });

	    it('Oldest toast on top', function (done) {
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
	        done();
	    });
	});

	describe('Positioning tests', function(){

		it('Container - position top-right', function (done) {
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
	        done();
	    });

	    it('Container - position bottom-right', function (done) {
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
	        done();
	    });

	    it('Container - position bottom-left', function (done) {
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
	        done();
	    });

	    it('Container - position top-left', function (done) {
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
	        done();
	    });

	    it('Container - position top-center', function (done) {
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
	        done();
	    });

	    it('Container - position bottom-center', function (done) {
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
	        done();
	    });
	});
});