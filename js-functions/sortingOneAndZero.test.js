const sortingOneAndZero = require('./sortingZeroAndOne');

test('test', () => {
    expect(sortingOneAndZero([0, 1])).toEqual([0, 1]);
});

test('test', () => {
    expect(sortingOneAndZero([0])).toEqual([0]);
});

test('test', () => {
    expect(sortingOneAndZero([1, 1])).toEqual([1, 1]);
});

test('test', () => {
    expect(sortingOneAndZero([1, 0])).toEqual([0, 1]);
});

test('test', () => {
    expect(sortingOneAndZero([1, 0, 1, 0, 1, 0])).toEqual([0, 0, 0, 1, 1, 1]);
});

test('test', () => {
    expect(sortingOneAndZero([1, 1, 1, 0, 0, 0])).toEqual([0, 0, 0, 1, 1, 1]);
});

test('test', () => {
    expect(sortingOneAndZero([0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0])).toEqual(
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
});