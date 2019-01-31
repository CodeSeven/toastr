module.exports = {
    extends: [
        'typescript',
        'airbnb-base',
    ],
    env: {
        browser: true,
        jest: true,
        node: true,
    },
    parser: 'typescript-eslint-parser',
    settings: {
        'import/resolver': {
            node: {
                extensions: [
                    '.js',
                    '.ts',
                    '.scss'
                ]
            }
        }
    },
    rules: {
        // overwritten as .ts files are used
        // Forbid the use of extraneous packages
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        // paths are treated both as absolute paths, and relative to process.cwd()
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: [
                'test/**', // tape, common npm pattern
                'tests/**', // also common npm pattern
                'spec/**', // mocha, rspec-like pattern
                '**/__tests__/**', // jest pattern
                '**/__mocks__/**', // jest pattern
                'test.{ts,tsx}', // repos with a single test file
                'test-*.{ts,tsx}', // repos with multiple top-level test files
                '**/*{.,_}{test,spec}.{ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
                '**/jest.config.ts', // jest config
                '**/vue.config.ts', // vue-cli config
                '**/webpack.config.ts', // webpack config
                '**/webpack.config.*.ts', // webpack config
                '**/rollup.config.ts', // rollup config
                '**/rollup.config.*.ts', // rollup config
                '**/gulpfile.ts', // gulp config
                '**/gulpfile.*.ts', // gulp config
                '**/Gruntfile{,.ts}', // grunt config
                '**/protractor.conf.ts', // protractor config
                '**/protractor.conf.*.ts', // protractor config
            ],
            optionalDependencies: false,
        }],
    },
};
