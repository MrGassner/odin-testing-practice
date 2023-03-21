const calculator = require('./calculator')

it ('Add to numbers and return total', () => {
    expect(calculator('2 + 2')).toBe(4)})

it ('Subtract to numbers and return total', () => {
    expect(calculator('4 - 2')).toBe(2)})

it ('Multiply to numbers and return total', () => {
    expect(calculator('4 * 2')).toBe(8)})

it ('Divide to numbers and return total', () => {
    expect(calculator('4 / 2')).toBe(2)})
