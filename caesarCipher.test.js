const caesarCipher = require('./caesarCipher')

it ('Returns str 2 letters in front when no key presented', () => {
    expect(caesarCipher('abcd')).toBe('cdef')
})

it ('Returns str cipher respecting the key', () => {
    expect(caesarCipher('abcd', 5)).toBe('fghi')
})

it ('Returns str with spaces correctly', () => {
    expect(caesarCipher('abcd abcd', 5)).toBe('fghi fghi')
})

it ('Return str after z correctly (lower case)', () => {
    expect(caesarCipher('xyz')).toBe('zab')
})

it ('Return str after z correctly (upper case)', () => {
    expect(caesarCipher('XYZ')).toBe('ZAB')
})

it ('Return str right with high value for the key', () => {
    expect(caesarCipher('abcd', 50)).toBe('yzab')
    expect(caesarCipher('ABCD', 100)).toBe('WXYZ')
    expect(caesarCipher('ABCD', 259)).toBe('ZABC')
})