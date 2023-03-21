module.exports = {

    "plugins": [
            "vihu",
            '@typescript-eslint'],

    "parser": "@typescript-eslint/parser",

    "extends" : [
        "eslint:recommended" ,
        "plugin:@typescript-eslint/recommended"
    ],

    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },

    "env": {
        "browser": true,
        "es2021": true,
        "es6": true
    },

    "rules": {
        "vihu/no-console": "error",
        "vihu/must-camelcase": "error",
        "vihu/no-moment": "error",
    }
};