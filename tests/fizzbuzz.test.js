const fizzbuzz = require('../src/fizzbuzz')

test('should return 1 when enter 1', () => {
    expect(1).toBe(fizzbuzz(1));
});