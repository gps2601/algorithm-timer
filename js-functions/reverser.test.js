const reverser = require('./reverser');

test('empty array returns empty array', () => {
    expect(reverser([1])).toEqual([1]);
});

test('ordered array should return in reverse order', () => {
    expect(reverser([1,2,3,4])).toEqual([4,3,2,1]);
});

test('reverse ordered array should return in order', () => {
    expect(reverser([4,3,2,1])).toEqual([1,2,3,4]);
});

test('can reverse strings', () => {
    expect(reverser(["hello", "world"])).toEqual(["world", "hello"]);
});