module.exports = function() {
    var source = './src/';
    var tests = './tests/**/*.js';

    var config = {
        alljs: [
            './src/**/*.js',
            tests
        ],
        build: './dist/',
        js: [
            source + '**/*.js'
        ],
        less: source + 'toastr.less',
        mainFile: 'toastr.js',
        source: source,
        tests: tests
    };

    return config;
};
