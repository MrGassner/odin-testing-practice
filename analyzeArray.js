function analyzeArray(array) {
    let arrayInfo = {
        'average': 0,
        'min': 0,
        'max': 0,
        'length': 0
    }

    const average = (array.reduce((a, b) => (a + b))) / array.length
    console.log(average)
    
    arrayInfo['average'] = average
    arrayInfo['min'] = Math.min(...array)
    arrayInfo['max'] = Math.max(...array)
    arrayInfo['length'] = array.length

    console.log(array)
    
    return arrayInfo
}


module.exports = analyzeArray