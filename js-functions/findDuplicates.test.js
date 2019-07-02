const findDuplicates = require('./findDuplicates');

test('returns an empty array if no duplicates', () => {
    expect(findDuplicates(["hello"])).toEqual([]);
});

test('if one duplicate returns an array containing that duplicate', () => {
    expect(findDuplicates(['a', 'b', 'c', 'a'])).toEqual(['a']);
});