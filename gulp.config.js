module.exports = function() {
    var source = './src/';
    var tests = './tests/**/*.js';

    var config = {
        // all javascript that we want to vet
        alljs: [
            './src/**/*.js',
            tests
        ],
        build: './dist/',
        // css: source + 'styles.css',
        // less: source + 'styles/styles.less'
        js: [
            source + '**/*.js'
        ],
        mainFile: 'toastr.js',
        source: source,
        tests: tests
    };

    return config;
};
