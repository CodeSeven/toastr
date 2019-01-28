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
};
