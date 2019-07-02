const fib = (n) => {
    if (n === 0){
        return [];
    }
    if (n === 1) {
        return [0]
    }
    if (n === 2) {
        return [0, 1];
    }
    let theArray = [0,1];
    let max = 1;
    let min = 0;

    while (theArray.length < n) {
        let newValue = max + min;
        theArray.push(newValue);
        min = max;
        max = newValue;
    }
    return theArray;
};

module.exports = fib;