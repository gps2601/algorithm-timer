function reverser(arrayToReverse) {
    let reversedArray = [];
    for(i = arrayToReverse.length - 1; i >=0; i--){
        reversedArray.push(arrayToReverse[i]);
    }
    return reversedArray;
};

module.exports = reverser;