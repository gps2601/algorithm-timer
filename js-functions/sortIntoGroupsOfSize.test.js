const sortIntoGroupsOfSize = require('./sortIntoGroupsOfSize');

test('group size of 1 will return a single array within array', () => {
    expect(sortIntoGroupsOfSize([], 1)).toEqual([]);
});

test('group size of 2 will return a single array within array if only 1 person', () => {
    expect(sortIntoGroupsOfSize(['stevie'], 2)).toEqual([['stevie']]);
});

test('group size of 2 will return a single array if 0 person', () => {
    expect(sortIntoGroupsOfSize([], 2)).toEqual([]);
});

test('group size of 1 will return a single array if 1 person', () => {
    expect(sortIntoGroupsOfSize(['geoff'], 1)).toEqual([['geoff']]);
});

test('group size of 1 will return a single array of 2 person', () => {
    expect(sortIntoGroupsOfSize(['geoff', 'annie'], 1)).toEqual([['geoff'], ['annie']]);
});

test('group size of 2, 3 people, returns 2 arrays 2x and 1x', () => {
    expect(sortIntoGroupsOfSize(['geoff', 'annie', 'daisy'], 1)).toEqual([['geoff'],['annie'], ['daisy']]);
});

test('group size of 2, 3 people, returns 2 arrays 2x and 1x', () => {
    expect(sortIntoGroupsOfSize(['geoff', 'annie', 'daisy'], 2)).toEqual([['geoff', 'annie'], ['daisy']]);
});

test('group size of 2, 4 people, returns 2 arrays 2x and 2x', () => {
    expect(sortIntoGroupsOfSize(['geoff', 'annie', 'daisy', 'someone'], 2)).toEqual([['geoff', 'annie'], ['daisy', 'someone']]);
});

test('group size of 2, 5 people, returns 2 arrays 2x and 2x', () => {
    expect(sortIntoGroupsOfSize(['geoff', 'annie', 'daisy', 'someone', 'ollie'], 2)).toEqual([['geoff', 'annie'], ['daisy', 'someone'], ['ollie']]);
});

test('group size of 2, 6 people, returns 3 arrays 2x', () => {
    expect(sortIntoGroupsOfSize(['geoff', 'annie', 'daisy', 'someone', 'ollie', 'jayda'], 2)).toEqual([['geoff', 'annie'], ['daisy', 'someone'], ['ollie', 'jayda']]);
});

test('group size of 3, 6 people, returns 2 arrays 3x and 3x', () => {
    expect(sortIntoGroupsOfSize(['geoff', 'annie', 'daisy', 'someone', 'ollie', 'jayda'], 3)).toEqual([['geoff', 'annie','daisy'], ['someone','ollie', 'jayda']]);
});

test('group size of 4, 6 people, returns 2 arrays 3x and 3x', () => {
    expect(sortIntoGroupsOfSize(['geoff', 'annie', 'daisy', 'someone', 'ollie', 'jayda'], 3)).toEqual([['geoff', 'annie','daisy'], ['someone','ollie', 'jayda']]);
});
