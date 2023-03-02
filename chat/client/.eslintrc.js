const ERROR = 2;
const IGNORE = 0;

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "semi": ERROR,
        "comma-dangle": [
            "error", "always-multiline"
        ],
        "require-atomic-updates": IGNORE,
        "no-redeclare": IGNORE,
        "no-shadow": IGNORE,
        "quotes": ["error", "single"],
        "quote-props": [
            "error", "as-needed"
        ],
        "object-shorthand": ["error", "always"],
        "object-curly-spacing": ["error", "never"],
        "eol-last": ["error", "always"],
        "no-undef": IGNORE,
        "no-unused-vars": IGNORE,
    }
}
