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
        "semi": 2,
        "comma-dangle": [
            "error", "always-multiline"
        ],
        "require-atomic-updates": 0,
        "no-redeclare": 0,
        "no-shadow": 0,
        "quotes": ["error", "single"],
        "quote-props": [
            "error", "as-needed"
        ],
        "object-shorthand": ["error", "always"],
        "object-curly-spacing": ["error", "never"],
        "eol-last": ["error", "always"],
        "no-undef": 0,
        "no-unused-vars": 0,
    }
}
