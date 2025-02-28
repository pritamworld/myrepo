export default [
    {
        files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
        rules: {
            "prefer-const": "warn",
            "no-constant-binary-expression": "error",
            "quotes": ["error", "double"], // Enforce double quotes
            "semi": ["error", "always"], // Require semicolons
            "eqeqeq": ["error", "always"], // Enforce strict equality
            "curly": ["error", "all"], // Require curly braces for all control statements
            "no-var": "error", // Disallow var, use let or const instead
            "strict": ["error", "global"], // Enforce strict mode
            
            "comma-dangle": ["error", "always-multiline"], // Require trailing commas where valid
            "object-curly-spacing": ["error", "always"], // Enforce spacing inside object braces
            "arrow-spacing": ["error", { "before": true, "after": true }], // Require spacing around arrow functions
            "space-before-function-paren": ["error", "never"], // No space before function parentheses
            "indent": ["error", 4], // Enforce 2-space indentation
            "max-len": ["error", { "code": 200 }], // Limit line length to 100 characters
            "no-unused-vars": ["warn", { "args": "none" }], // Warn about unused variables, but ignore function args
            // "no-console": "warn", // Warn about console.log usage
        },
    },
];
