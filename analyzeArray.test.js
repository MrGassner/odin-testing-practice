const analyzeArray = require('./analyzeArray')

it ('Returns an object with the key names', () => {
    expect(analyzeArray([0])).toStrictEqual(
        {
           average: 0,
           min: 0,
           max: 0,
           length: 1
        })
})

it ('Returns an object with the key names', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual(
        {
           'average': 4,
           'min': 1,
           'max': 8,
           'length': 6
        })
})