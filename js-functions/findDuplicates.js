function findDuplicates(array){
    let duplicates = [];
    for(let i=0; i<array.length; i++){
        let value = array[i];
        let count = 0;
        for(let j =0; j<array.length; j++){
            if(array[j] === value) {
                count ++;
            }
        }
        if (count > 1 && !duplicates.includes(value)){
            duplicates.push(value);
        }
    }
    return duplicates;
}

module.exports = findDuplicates;