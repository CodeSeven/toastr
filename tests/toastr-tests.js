/* jshint -W117, -W030 */
// var assert = require("assert")
var chai = require('chai');
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
	        expect(jQuery($toast).find('div.toast-title').html()).to.contain(sampleTitle);
	        expect(jQuery($toast).find('div.toast-message').html()).to.contain(sampleMsg);
	        expect(jQuery($toast).hasClass(iconClasses.warning)).to.be.true;
	        //Teardown
	        $toast.remove();
	        // clearContainerChildren();

			done();
		});

		it('warning - pass message, but no title', function(done){
			var $toast = t.warning(sampleMsg);
	        //Assert
	        expect(jQuery($toast).find('div.toast-title').length).to.equal(0);
	        expect(jQuery($toast).find('div.toast-message').html()).to.contain(sampleMsg);
	        expect(jQuery($toast).hasClass(iconClasses.warning)).to.be.true;
	        //Teardown
	        $toast.remove();
	        // clearContainerChildren();
	        done();
		});

		it('warning - no message nor title', function(done){
			var $toast = t.warning();

	        //Assert
	        expect(jQuery($toast).find('div.toast-title').length).to.equal(0);
	        expect(jQuery($toast).find('div.toast-message').length).to.equal(0);
	        expect(jQuery($toast).hasClass(iconClasses.warning)).to.be.true;
	        //Teardown
	        $toast.remove();
	        // clearContainerChildren();
	        done();
		});
	});

	describe('Error tests', function(){
		it('error - pass message and title', function(done){
			var $toast = t.error(sampleMsg, sampleTitle);
	        //Assert
	        expect(jQuery($toast).find('div.toast-title').html()).to.contain(sampleTitle);
	        expect(jQuery($toast).find('div.toast-message').html()).to.contain(sampleMsg);
	        expect(jQuery($toast).hasClass(iconClasses.error)).to.be.true;
	        //Teardown
	        $toast.remove();
	        // clearContainerChildren();
	        done();
		});

		it('error - pass message, but no title', function(done){
			var $toast = t.error(sampleMsg); //Assert

	        expect(jQuery($toast).find('div.toast-title').length).to.equal(0);
	        expect(jQuery($toast).find('div.toast-message').html()).to.contain(sampleMsg);
	        expect(jQuery($toast).hasClass(iconClasses.error)).to.be.true;
	        //Teardown
	        $toast.remove();
	        // clearContainerChildren();
	        done();
		});

		it('error - no message nor title', function(done){
			var $toast = t.error();
	        //Assert
	        expect(jQuery($toast).find('div.toast-title').length).to.equal(0);
	        expect(jQuery($toast).find('div.toast-message').length).to.equal(0);
	        expect(jQuery($toast).hasClass(iconClasses.error)).to.be.true;
	        //Teardown
	        $toast.remove();
	        // clearContainerChildren();
	        done();
		});
	});

	describe('Success tests', function(){
		it('success - pass message and title', function(done){
			var $toast = t.success(sampleMsg, sampleTitle);
	        //Assert
	        expect(jQuery($toast).find('div.toast-title').html()).to.contain(sampleTitle);
	        expect(jQuery($toast).find('div.toast-message').html()).to.contain(sampleMsg);
	        expect(jQuery($toast).hasClass(iconClasses.success)).to.be.true;
	        //Teardown
	        $toast.remove();
	        // clearContainerChildren();
	        done();
		});

		it('success - pass message, but no title', function(done){
			var $toast = t.success(sampleMsg);
	        //Assert
	        expect(jQuery($toast).find('div.toast-title').length).to.equal(0);
	        expect(jQuery($toast).find('div.toast-message').html()).to.contain(sampleMsg);
	        expect(jQuery($toast).hasClass(iconClasses.success)).to.be.true;
	        //Teardown
	        $toast.remove();
	        // clearContainerChildren();
	        done();
		});

		it('success - no message nor title', function(done){
			//Arrange
	        //Act
	        var $toast = t.success();
	        //Assert
	        expect(jQuery($toast).find('div.toast-title').length).to.equal(0);
	        expect(jQuery($toast).find('div.toast-message').length).to.equal(0);
	        expect(jQuery($toast).hasClass(iconClasses.success)).to.be.true;
	        $toast.remove();
	        // clearContainerChildren();
	        done();
		});
	});

	describe('Close Button tests', function(){
		beforeEach(function(){
			t.options.closeButton = false;
		});

		it('close button disabled', function (done) {
	        //Arrange
	        t.options.closeButton = false;
	        //Act
	        var $toast = t.success('');
	        console.log($toast);
	        //Assert
	        //, 'close button should not exist with closeButton=false'
	        expect(jQuery($toast).find('button.toast-close-button').length).to.equal(0);
	        //Teardown
	        $toast.remove();
	        // clearContainerChildren();
	        done();
	    });

	    it('close button enabled', function (done) {
	        //Arrange
	        t.options.closeButton = true;
	        //Act
	        var $toast = t.success('');
	        console.log($toast);
	        //Assert
	        //, 'close button should exist with closeButton=true'
	        expect(jQuery($toast).find('button.toast-close-button').length).to.equal(1);
	        //Teardown
	        $toast.remove();
	        // clearContainerChildren();
	        done();
	    });

	    it('close button has type=button', function (done) {
	        //Arrange
	        t.options.closeButton = true;
	        //Act
	        var $toast = t.success('');
	        //Assert
	        // , 'close button should have type=button'
	        expect(jQuery($toast).find('button[type="button"].toast-close-button').length).to.equal(1);
	        //Teardown
	        $toast.remove();
	        // clearContainerChildren();
	        done();
	    });
	});

	describe('Progress Bar tests', function(){
		beforeEach(function(){
			t.options.progressBar = false;
		});

		it('progress bar disabled', function (done) {
	        //Arrange
	        // t.options.progressBar = false;
	        //Act
	        var $toast = t.success('');
	        //Assert
	        expect(jQuery($toast).find('div.toast-progress').length).to.equal(0);
	        //Teardown
	        $toast.remove();
	        // clearContainerChildren();
	        done();
	    });

	    it('progress bar enabled', function (done) {
	        //Arrange
	        t.options.progressBar = true;
	        //Act
	        var $toast = t.success('');
	        //Assert
	        expect(jQuery($toast).find('div.toast-progress').length).to.equal(1);
	        //Teardown
	        $toast.remove();
	        // clearContainerChildren();
	        done();
	    });
	});

	describe('Event tests', function(){
		beforeEach(function(){
			resetContainer(t);
		});

		afterEach(function(){
			clearContainerChildren(t);
		});

		it('event - onShown is executed', function (done) {
	        // Arrange
	        var run = false;
	        var onShown = function () { run = true; };
	        t.options.onShown = onShown;
	        // Act
	        var $toast = t.success(sampleMsg, sampleTitle);

            // Assert
            expect(run).to.be.true;
            //Teardown
            $toast.remove();
            // clearContainerChildren();
            // start();
            done();

	    });

	    it('event - onHidden is executed', function (done) {

	        //Arrange
	        var run = false;
	        var onHidden = function () { run = true; console.log('Run Hidden');};
	        t.options.onHidden = onHidden;
	        t.options.timeOut = 1;
	        //Act

	        var $toast = t.success(sampleMsg, sampleTitle);

			setTimeout(function () {
				// Assert
				// ok(run); //Teardown
				expect(run).to.be.true;

				$toast.remove();
				// clearContainerChildren();
				// start();
				done();
			}, 200);
	    });

	    it('event - onShown and onHidden are both executed', function (done) {
	        //Arrange
	        var onShowRun = false;
	        var onHideRun = false;
	        var onShow = function () { onShowRun = true; };
	        var onHide = function () { onHideRun = true; };
	        t.options.onShown = onShow;
	        t.options.onHidden = onHide;
	        t.options.timeOut = 1;
	        //Act
	        var $toast = t.success(sampleMsg, sampleTitle);

            // Assert
            // ok(onShowRun);
            // ok(onHideRun);
            setTimeout(function(){
            	expect(onShowRun).to.be.true;
	            expect(onHideRun).to.be.true;
	            //Teardown
	            $toast.remove();
	            clearContainerChildren(t);
	            // start();
		        done();
            }, 200);
	    });

	    it('event - message appears when no show or hide method functions provided', function (done) {
	        //Arrange
	        //Act
	        var $toast = t.success(sampleMsg, sampleTitle);

	       	expect(jQuery($toast).hasClass(iconClasses.success)).to.be.true;
	        //Assert
	        // ok($toast.hasClass(iconClasses.success), 'Sets success icon');
	        //Teardown
	        $toast.remove();
	        clearContainerChildren(t);
	        done();
	    });

	    it('event - prevent duplicate sequential toasts.', function(done){
	        t.options.preventDuplicates = true;

	        var $toast = [];
	        $toast[0] = t.info(sampleMsg, sampleTitle);
	        $toast[1] = t.info(sampleMsg, sampleTitle);
	        $toast[2] = t.info(sampleMsg + " 1", sampleTitle);
	        $toast[3] = t.info(sampleMsg, sampleTitle);
	        var $container = t.getContainer();

	        expect($container).to.be.defined;
	        expect($container.children.length).to.equal(3);

	        clearContainerChildren(t);
	        done();
	    });

	    it('event - prevent duplicate sequential toasts, but allow previous after clear.', function(done){
	        t.options.preventDuplicates = true;

	        var $toast = [];
	        $toast[0] = t.info(sampleMsg, sampleTitle);
	        $toast[1] = t.info(sampleMsg, sampleTitle);
	        clearContainerChildren(t);
	        $toast[3] = t.info(sampleMsg, sampleTitle);
	        var $container = t.getContainer();

	        expect($container).to.be.defined;
	        expect($container.children.length).to.equal(1);

	        clearContainerChildren(t);
	        done();
	    });

	    it('event - allow duplicate sequential toasts.', function(done){
	        t.options.preventDuplicates = false;

	        var $toast = [];
	        $toast[0] = t.info(sampleMsg, sampleTitle);
	        $toast[1] = t.info(sampleMsg, sampleTitle);
	        $toast[1] = t.info(sampleMsg, sampleTitle);
	        var $container = t.getContainer();

	        expect($container).to.be.defined;
	        expect($container.children.length).to.equal(3);

	        clearContainerChildren(t);
	        done();
	    });

	    it('event - allow preventDuplicates option to be overridden.', function(done) {
	        var $toast = [];

	        $toast[0] = t.info(sampleMsg, sampleTitle, {
	            preventDuplicates: true
	        });
	        $toast[1] = t.info(sampleMsg, sampleTitle, {
	            preventDuplicates: true
	        });
	        $toast[2] = t.info(sampleMsg, sampleTitle);
	        var $container = t.getContainer();

	        expect($container).to.be.defined;
	        expect($container.children.length).to.equal(2);

	        clearContainerChildren(t);
	        done();
	    });
	});

	describe('Order of Appearance tests', function(){
		beforeEach(function(){
			resetContainer(t);
		});

		afterEach(function(){
			clearContainerChildren(t);
		});

		it('Newest toast on top', function (done) {
	        t.options.newestOnTop = true;

	        var $first = t.success("First toast");
	        var $second = t.success("Second toast");


        	var containerHtml = jQuery(t.getContainer()).html();

        	expect(containerHtml.indexOf("First toast")).to.be.above(containerHtml.indexOf("Second toast"));

	        $first.remove();
	        $second.remove();

	        done();
	    });

	    it('Oldest toast on top', function (done) {
	        t.options.newestOnTop = false;

	        var $first = t.success("First toast");
	        var $second = t.success("Second toast");

	        var containerHtml = jQuery(t.getContainer()).html();

	        expect(containerHtml.indexOf("First toast")).to.be.below(containerHtml.indexOf("Second toast"));

	        $first.remove();
	        $second.remove();

	        done();
	    });
	});

	describe('Positioning tests', function(){

		beforeEach(function(){
			resetContainer(t);
		});

		afterEach(function(){
			clearContainerChildren(t);
		});

		it('Container - position top-right', function (done) {
	        //Arrange

	        t.options.positionClass = positionClasses.topRight;
	        //Act
	        var $toast = t.success(sampleMsg);
	        var $container = t.getContainer();
	        //Assert
	        expect(jQuery($container).hasClass(positionClasses.topRight)).to.be.true;
	        //Teardown
	        $toast.remove();
	        // resetContainer();
	        done();
	    });

	    it('Container - position bottom-right', function (done) {
	        //Arrange

	        t.options.positionClass = positionClasses.bottomRight;

	        //Act
	        var $toast = t.success(sampleMsg);
	        var $container = t.getContainer();
	        //Assert
	        expect(jQuery($container).hasClass(positionClasses.bottomRight)).to.be.true;
	        //Teardown
	        $toast.remove();
	        // resetContainer();
	        done();
	    });

	    it('Container - position bottom-left', function (done) {
	        //Arrange
	        // resetContainer();
	        //$(selectors.container).remove()
	        t.options.positionClass = positionClasses.bottomLeft;
	        //Act
	        var $toast = t.success(sampleMsg);
	        var $container = t.getContainer();
	        //Assert
	        expect(jQuery($container).hasClass(positionClasses.bottomLeft)).to.be.true;
	        //Teardown
	        $toast.remove();
	        // resetContainer();
	        done();
	    });

	    it('Container - position top-left', function (done) {
	        //Arrange
	        // resetContainer();
	        t.options.positionClass = positionClasses.topLeft;
	        //Act
	        var $toast = t.success(sampleMsg);
	        var $container = t.getContainer();
	        //Assert
	        expect(jQuery($container).hasClass(positionClasses.topLeft)).to.be.true;
	        //Teardown
	        $toast.remove();
	        // resetContainer();
	        done();
	    });

	    it('Container - position top-center', function (done) {
	        //Arrange
	        // resetContainer();
	        t.options.positionClass = positionClasses.topCenter;
	        //Act
	        var $toast = t.success(sampleMsg);
	        var $container = t.getContainer();
	        //Assert
	        expect(jQuery($container).hasClass(positionClasses.topCenter)).to.be.true;
	        //Teardown
	        $toast.remove();
	        // resetContainer();
	        done();
	    });

	    it('Container - position bottom-center', function (done) {
	        //Arrange
	        // resetContainer();
	        t.options.positionClass = positionClasses.bottomCenter;
	        //Act
	        var $toast = t.success(sampleMsg);
	        var $container = t.getContainer();
	        //Assert
	        expect(jQuery($container).hasClass(positionClasses.bottomCenter)).to.be.true;
	        //Teardown
	        $toast.remove();
	        // resetContainer();
	        done();
	    });
	});
});