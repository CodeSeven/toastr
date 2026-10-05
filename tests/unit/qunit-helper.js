/**
 * Hack to expose spec count from QUnit to Karma
 */

var testCount = 0;
var qunitTest = QUnit.test;
QUnit.test = window.test = function () {
    testCount += 1;
    qunitTest.apply(this, arguments);
};
QUnit.begin(function (args) {
    args.totalTests = testCount;
});


QUnit.test('should escape HTML by default', function (assert) {
    toastr.remove();
    var maliciousMessage = '<script>alert("Hacked")</script>';
    var $toast = toastr.info(maliciousMessage);
    assert.ok($toast, 'Toast was created');
    var $message = $toast.find('.toast-message');
    assert.equal(
        $message.text(),
        maliciousMessage,
        'HTML is displayed as plain text'
    );
    assert.equal(
        $message.find('script').length,
        0,
        'Script element is not created'
    );
    toastr.remove();
});


QUnit.test('should render HTML when escapeHtml is explicitly disabled', function (assert) {
    toastr.remove();
    toastr.options.escapeHtml = false;
    var htmlMessage = '<strong>Trusted message</strong>';
    var $toast = toastr.info(htmlMessage);
    assert.equal(
        $toast.find('.toast-message strong').length,
        1,
        'HTML is rendered when escapeHtml is explicitly disabled'
    );
    toastr.options.escapeHtml = true;
    toastr.remove();
});
