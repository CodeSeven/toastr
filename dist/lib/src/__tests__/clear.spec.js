"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Toastr_1 = __importDefault(require("../Toastr"));
var sampleMsg = 'I don\'t think they really exist';
var sampleTitle = 'TEST';
describe('clear', function () {
    beforeEach(function () {
        document.body.innerHTML = '';
    });
    it('show 3 toasts, clear the 2nd', function () {
        var toastr = new Toastr_1.default();
        var toast1 = toastr.info(sampleMsg, sampleTitle + "-1");
        toastr.info(sampleMsg, sampleTitle + "-2");
        toastr.info(sampleMsg, sampleTitle + "-3");
        var container = toastr.$container;
        expect(container.children).toHaveLength(3);
        toastr.clear(toast1);
        expect(container.children).toHaveLength(2);
    });
    it('show 3 errors, clear all 3, 0 left', function () {
        var toastr = new Toastr_1.default();
        toastr.info(sampleMsg, sampleTitle + "-1");
        toastr.info(sampleMsg, sampleTitle + "-2");
        toastr.info(sampleMsg, sampleTitle + "-3");
        var container = toastr.$container;
        expect(container.children).toHaveLength(3);
        toastr.clear();
        expect(container.children).toHaveLength(0);
    });
});
//# sourceMappingURL=clear.spec.js.map