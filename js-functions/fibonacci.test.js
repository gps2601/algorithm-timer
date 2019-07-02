const fib = require('./fibonacci');

test('n=0', () => {
    expect(fib(0)).toEqual([]);
})

test('n=1', () => {
    expect(fib(1)).toEqual([0]);
})

test('n=2', () => {
    expect(fib(2)).toEqual([0, 1]);
})

test('n=3', () => {
    expect(fib(3)).toEqual([0, 1, 1]);
})

test('n=10', () => {
    expect(fib(10)).toEqual([0, 1]);
})

test('n=1000', () => {
    expect(fib(1000)).toEqual([0, 1]);
})