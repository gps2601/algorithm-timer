const twoMostFrequentWords = require('./mostFrequentWord');

test('if no words returns empty array', () => {
    expect(twoMostFrequentWords([])).toEqual([]);
});

test('if one word returns one word array', () => {
    expect(twoMostFrequentWords(['first'])).toEqual(['first']);
});

test('if two words the same, returns one word array', () => {
    expect(twoMostFrequentWords(['first', 'first'])).toEqual(['first']);
});

test('if two words, returns two word array', () => {
    expect(twoMostFrequentWords(['first', 'second'])).toEqual(['first', 'second']);
});

test('if three words same, returns one word array', () => {
    expect(twoMostFrequentWords(['first', 'first', 'first'])).toEqual(['first']);
});

test('if three words different, returns two word array', () => {
    expect(twoMostFrequentWords(['first', 'second', 'third'])).toEqual(['first', 'second']);
});

test('if three words, 2 same 1 different, returns two word array', () => {
    expect(twoMostFrequentWords(['first', 'second', 'first'])).toEqual(['first', 'second']);
});

test('if four words, 2 same, 2 different, returns two word array', () => {
    expect(twoMostFrequentWords(['first', 'first', 'second', 'third'])).toEqual(['first', 'second']);
});

test('if five words, 2 same, 2 same, 1 different,  returns two word array', () => {
    expect(twoMostFrequentWords(['first', 'first', 'second', 'third', 'third'])).toEqual(['first', 'third']);
});