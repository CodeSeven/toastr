# 2.0.2 (2014-04-29)

## Features
- Added simple ARIA reader support ([45c6362](https://github.com/CodeSeven/toastr/commit/45c63628476f6b085a6579dc681f4fe61ba5820c))
- Added SASS support (direct port of CSS for now) ([b4c8b34](https://github.com/CodeSeven/toastr/commit/b4c8b3460efb8aa51c730dd38c35ef6b025db2cc))

## Bug Fixes
- Added sourcemap for the min file ([1da4bd1](https://github.com/CodeSeven/toastr/commit/1da4bd1dad21bcfc7fcfe73da1abb185cf2c3f9f))
- IE 8 does not support stopPropagation on the event ([6989573](https://github.com/CodeSeven/toastr/commit/698957325a8e7bf63990f71ee409b911d69bc8ec))
- Media query width fixes ([ea2f5db](https://github.com/CodeSeven/toastr/commit/ea2f5db6e5314dcfe48eb34176583849c177c00e))
- Fix of onHidden firing twice when clicking on it then moving mouse out of toast ([ad613b9](https://github.com/CodeSeven/toastr/commit/ad613b9f18feeec630497590b85ca75c52141ea3) , [#105](https://github.com/CodeSeven/toastr/issues/105))
- Clear all toasts followed by a new toast now displays correctly ([3126a53](https://github.com/CodeSeven/toastr/commit/3126a533e0ab12ec3ff374e155a37fd38bd23bb6) , [#149](https://github.com/CodeSeven/toastr/issues/149) , [#118](https://github.com/CodeSeven/toastr/issues/118))

## Breaking Changes
- None

# 2.0.0 (2013-09-01)

## Breaking Changes

####Animation Changes
The following animations options have been deprecated and should be replaced:

 - Replace `options.fadeIn` with `options.showDuration`
 - Replace `options.onFadeIn` with `options.onShown`
 - Replace `options.fadeOut` with `options.hideDuration`
 - Replace `options.onFadeOut` with `options.onHidden`


