"use strict";
Object.defineProperties(module.exports, {
  Toastr: {get: function() {
      return Toastr;
    }},
  __esModule: {value: true}
});
var Toastr = function Toastr() {
  console.log("ready");
};
($traceurRuntime.createClass)(Toastr, {
  clear: function() {},
  remove: function() {},
  error: function(message, title, options) {},
  info: function(message, title, options) {
    assert.type(message, "string");
  },
  success: function(message, title, options) {},
  warning: function(message, title, options) {},
  getContainer: function(options, create) {},
  options: function() {},
  version: function() {}
}, {});
