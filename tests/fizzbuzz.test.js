const fizzbuzz = require('../src/fizzbuzz')

test('should return 1 when enter 1', () => {
    expect(1).toBe(fizzbuzz(1));
});

test('should return 2 when enter 2', () => {
    expect(2).toBe(fizzbuzz(2))
})

test('should return Fizz when enter 3', () => {
    expect("Fizz").toBe(fizzbuzz(3))
})