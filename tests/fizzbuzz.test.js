const fizzbuzz = require('../src/fizzbuzz')

test('should return 1 when enter 1', () => {
    expect(1).toBe(fizzbuzz(1));
});

test('should return 2 when enter 2', () => {
    expect(2).toBe(fizzbuzz(2))
})

test('should return Fizz when enter 3', () => {
    expect(fizzbuzz(3)).toBe("Fizz")
})

test('should return 4 when enter 4', () => {
    expect(4).toBe(fizzbuzz(4))
})

test('should return Buzz when enter 5', () => {
    expect(fizzbuzz(5)).toBe("Buzz")
})

test('should return Fizz when enter 6', () => {
    expect(fizzbuzz(6)).toBe("Fizz")
})

test('should return 7 when enter 7', () => {
    expect(fizzbuzz(7)).toBe(7)
})

test('should return 8 when enter 8', () => {
    expect(fizzbuzz(8)).toBe(8)
})

test('should return Fizz when enter 9', () => {
    expect(fizzbuzz(9)).toBe("Fizz")
})

test('should return Buzz when enter 10', () => {
    expect(fizzbuzz(10)).toBe("Buzz")
})

test('should return 11 when enter 11', () => {
    expect(fizzbuzz(11)).toBe(11)
})

test('should return Fizz when enter 12', () => {
    expect(fizzbuzz(12)).toBe("Fizz")
})

test('should return 13 when enter 13', () => {
    expect(fizzbuzz(13)).toBe(13)
})

test('should return 14 when enter 14', () => {
    expect(fizzbuzz(14)).toBe(14)
})