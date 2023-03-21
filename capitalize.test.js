const capitalize = require('./capitalize')

it ('Return string with first letter capitalized', () => 
    expect(capitalize('word')).toBe('Word'))