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

test('should return FizzBuzz when enter 15', () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz")
})

test('should return 16 when enter 16', () => {
     expect(fizzbuzz(16)).toBe(16)
})

test('should return 17 when enter 17', () => {
    expect(fizzbuzz(17)).toBe(17)
})

test('should return Fizz when enter 18', () => {
    expect(fizzbuzz(18)).toBe("Fizz")
})

test('should return 19 when enter 19', () => {
    expect(fizzbuzz(19)).toBe(19)
})

test('should return Buzz when enter 20', () => {
    expect(fizzbuzz(20)).toBe("Buzz")
})

test('should return Fizz when enter 21', () => {
    expect(fizzbuzz(21)).toBe("Fizz")
})

test('should return 22 when enter 22', () => {
    expect(fizzbuzz(22)).toBe(22)
})

test('should return 23 when enter 23', () => {
    expect(fizzbuzz(23)).toBe(23)
})

test('should return Fizz when enter 24', () => {
    expect(fizzbuzz(24)).toBe("Fizz")
})

test('should return Buzz when enter 25', () => {
    expect(fizzbuzz(25)).toBe("Buzz")
})

test('should return 26 when enter 26', () => {
    expect(fizzbuzz(26)).toBe(26)
})