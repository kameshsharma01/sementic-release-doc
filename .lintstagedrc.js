module.exports = {
    '*.js': ['prettier --write', 'eslint --fix'],
    '*.{json,md}': 'prettier --write'
};
