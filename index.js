const express = require('express');
const app = express();
const port = 3001;
const {performance} = require('perf_hooks');
const reverser = require('./js-functions/reverser');
const findDuplicates = require('./js-functions/findDuplicates');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => res.send(timingFramework(findDuplicates)));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

function timeToCompleteFunction(fun, argument) {
    let startTime = performance.now();
    fun(argument);
    let endTime = performance.now();
    return endTime - startTime;
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateArraysToTest() {
    let arraysToTest = [];
    for (i = 1; i <= 40000; i = i + 10000) {
        let currentArray = [];
        for (j = 0; j < i; j++) {
            currentArray.push(getRandomInt(0, 1000));
        }
        arraysToTest.push(currentArray);
    }
    return arraysToTest;
}

function timingFramework(functionToTest) {
    let results = [];
    let arraysToTest = generateArraysToTest();
    arraysToTest.forEach(numberArray => {
            let lengthOfArray = numberArray.length;
            let time = timeToCompleteFunction(functionToTest, numberArray);
            let result = { "x": lengthOfArray, "y": time};
            results.push(result);
        }
    );
    return results;
};
