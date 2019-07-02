function twoMostFrequentWords(wordArray){
    let wordsToReturn = {};

    wordArray.forEach(word => {
        if(!(word in wordsToReturn)){
            wordsToReturn[word] = 0;
        }
        wordsToReturn[word] = wordsToReturn[word] + 1;
    });
    console.log(wordsToReturn)
    return wordsToReturn;
}

module.exports =  twoMostFrequentWords;