"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Toastr_1 = __importDefault(require("../Toastr"));
describe('Toastr', function () {
    beforeEach(function () {
        document.body.innerHTML = '';
    });
    it('should not fail', function () {
        var toastr = new Toastr_1.default();
        expect(toastr).toBeInstanceOf(Toastr_1.default);
    });
    it('should create a container when creating an instance', function () {
        // eslint-disable-next-line no-new
        new Toastr_1.default();
        expect(document.getElementById('toast-container')).toBeDefined();
    });
});
//# sourceMappingURL=Toastr.spec.js.map