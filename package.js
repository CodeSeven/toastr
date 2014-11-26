var packageJson = JSON.parse(Npm.require("fs").readFileSync("package.json"));

Package.describe({
  "name": "codeseven:toastr",
  "summary": "ToastrJS (official): Gnome / Growl Type Non-blocking Notifications",
  "version": packageJson.version,
  "git": "https://github.com/CodeSeven/toastr.git"
});

Package.onUse(function(api) {

  api.versionsFrom("1.0");
  api.use("jquery", ["client"]);

  api.addFiles([
    "toastr.js",
    "toastr.css"
  ], ["client"]);

});