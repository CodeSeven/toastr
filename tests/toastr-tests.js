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
/*
toastrObj.options = {
    timeOut: 2000,
    extendedTimeOut: 0,
    fadeOut: 0,
    fadeIn: 0,
    showDuration: 0,
    hideDuration: 0,
    debug: false
};

var delay = toastrObj.options.timeOut + 500;*/

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
		console.log(t);
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
			$toast.find('button').focus();
			t.clear($toast, {force: true});

			var $container = t.getContainer();

			expect($container).to.exist;
	        expect($container.children).to.have.length(0);

	        // resetContainer();
	        done();
		});

		it('clear and show - show 2 toasts, clear both, then show 1 more', function(done){
			var $toast = [];

	        $toast[0] = toastr.info(sampleMsg, sampleTitle + '-1');
	        $toast[1] = toastr.info(sampleMsg, sampleTitle + '-2');
	        var $container = toastr.getContainer();
	        toastr.clear();
        
            $toast[2] = toastr.info(sampleMsg, sampleTitle + '-3-Visible');
            //Assert
            equal($toast[2].find('div.toast-title').html(), sampleTitle + '-3-Visible', 'Finds toast after a clear');
            ok($toast[2].is(':visible'), 'Toast after a clear is visible');
            //Teardown
            resetContainer();
            start();
            done();
		});

		it('clear and show - clear removes toast container', function(done){
			var $toast = [];
        	$toast[0] = toastr.info(sampleMsg, sampleTitle + '-1');
        	$toast[1] = toastr.info(sampleMsg, sampleTitle + '-2');
        	var $container = toastr.getContainer();
        	toastr.clear();
        
        
            //Assert
            equal($(selectors.container).length, 0, 'Toast container does not exist');
            ok(!$toast[1].is(':visible'), 'Toast after a clear is visible');
            //Teardown
            resetContainer();
            start();
        	done();
		});

		it('clear and show - after clear new toast creates container', function(done){
			var $toast = [];
        	$toast[0] = toastr.info(sampleMsg, sampleTitle + '-1');
        	$toast[1] = toastr.info(sampleMsg, sampleTitle + '-2');
        	var $container = toastr.getContainer();
        	toastr.clear();
        
            $toast[2] = toastr.info(sampleMsg, sampleTitle + '-3-Visible');
            //Assert
            equal($(selectors.container).find('div.toast-title').html(), sampleTitle + '-3-Visible', 'Finds toast after a clear'); //Teardown
            resetContainer();
            start();
            done();
		});

		it('clear and show - after clear all toasts new toast still appears', function(done){
			//Arrange
	        var $toast = [];
	        //Act
	        $toast[0] = toastr.info(sampleMsg, sampleTitle + '-1');
	        $toast[1] = toastr.info(sampleMsg, sampleTitle + '-2');
	        toastr.clear();
	        $toast[2] = toastr.info(sampleMsg, sampleTitle + '-3-Visible');
	        //Assert
	        ok($toast[2].is(':visible'), 'Toast after a clear is visible');
	        //Teardown
	        resetContainer();
	        done();
		});
	});

	describe('Info tests', function(){

		it('info - pass title and message', function(done){
			var $toast = t.info(sampleMsg, sampleTitle);
	        
	        // equal($toast.find('div.toast-title').html(), sampleTitle, 'Sets title');
	        // equal($toast.find('div.toast-message').html(), sampleMsg, 'Sets message');
	        // ok($toast.hasClass(iconClasses.info), 'Sets info icon');
	        
	        $toast.remove();
	        // clearContainerChildren();

	        done();
		});

		it('info - pass message, but no title', function(done){
			var $toast = t.info(sampleMsg);
	        //Assert
	        // equal($toast.find('div.toast-title').length, 0, 'Sets null title');
	        // equal($toast.find('div.toast-message').html(), sampleMsg, 'Sets message');
	        // ok($toast.hasClass(iconClasses.info), 'Sets info icon');
	        //Teardown
	        $toast.remove();
	        // clearContainerChildren();
	        done();
		});

		it('info - pass no message nor title', function(done){
			var $toast = t.info(); //Assert
        	// equal($toast.find('div.toast-title').length, 0, 'Sets null title');
        	// equal($toast.find('div.toast-message').html(), null, 'Sets message');
        	// ok($toast.hasClass(iconClasses.info), 'Sets info icon');
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
	        // clearContainerChildren();

			done();
		});
	});
});