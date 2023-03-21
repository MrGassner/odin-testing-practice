function calculator(str) {
    let arr = str.split(' ')

    switch (arr[1]) {
        case '+':
            return (Number(arr[0]) + Number(arr[2]))
        case '-':
            return (Number(arr[0]) - Number(arr[2]))
        case '*':
            return (Number(arr[0]) * Number(arr[2]))
        case '/':
            return (Number(arr[0]) / Number(arr[2]))
    }
}

module.exports = calculator