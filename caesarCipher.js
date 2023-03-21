function caesarCipher(str, key=2) {
    let cipheredText = ''

    for( let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i)
        let cipherCode = caseHandler(code, key)

        cipheredText = cipheredText + String.fromCharCode(cipherCode)
    }

    return cipheredText
}

function caseHandler(letterCode, key) {
    if (letterCode === 32) return letterCode
    while (key > 26) key = key - 26
    
    // upper case handler
    if (letterCode >= 65 && letterCode <= 90 ) {
        return (letterCode + key) > 90 ? (letterCode + key - 26) : (letterCode + key)
    }

    // lower case handler
    if (letterCode >= 97 && letterCode <= 122 ) {
        return (letterCode + key) > 122 ? (letterCode + key - 26) : (letterCode + key)
    }

    return letterCode + key
}

module.exports = caesarCipher