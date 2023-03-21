function reverseString(str) {
    let reversedString = ''

    for (let i = str.length; i > 0; i--) {
        reversedString = reversedString + str[(i - 1)]
    }

    return reversedString
}

module.exports = reverseString