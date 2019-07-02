function sortIntoGroupsOfSize(array, size) {
    let groupsToReturn =[];
    let groupIndex = 0;
    array.forEach(person => {
        if (!groupsToReturn[groupIndex]){
            groupsToReturn.push([]);
        }
        if (groupsToReturn[groupIndex].length >= size) {
            groupIndex ++;
        }
        if (!groupsToReturn[groupIndex]){
            groupsToReturn.push([]);
        }
        groupsToReturn[groupIndex].push(person);
    });
    return groupsToReturn;
};

module.exports = sortIntoGroupsOfSize;