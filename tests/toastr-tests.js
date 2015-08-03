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

	describe('v2 tests', function () {
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
			resetContainer(t);
		})

		it('clear - show 3 toasts, clear the 2nd', function (done) {
			//Arrange
		    var $toast = [];
		    $toast[0] = t.info(sampleMsg, sampleTitle + '-1');
		    $toast[1] = t.info(sampleMsg, sampleTitle + '-2');
		    $toast[2] = t.info(sampleMsg, sampleTitle + '-3');
		    var $container = t.getContainer();
		    //Act
		    t.clear($toast[1], {force: true}); // I have to force the removal. v2 doesn't have this requirement.
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
	});
});