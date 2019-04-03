/**
 * Given an array, return the smallest
 * element
 * @param {Array} array 
 */
const findSmallest = (array) => {
    let smallest = array[0];
    let smallestIndex = 0;
    array.forEach((value, index) => {
        if(value < smallest){
            smallest = value;
            smallestIndex = index;
        }
    });
    return smallestIndex;
}
/**
 * Given an array sort using the
 * very slow Selection Sort method
 * @param {Array} array 
 */
const selectionSort = (array, newArray=[]) => {

    // base case array 0 elements
    if (array.length < 1) {
        // we're done!
        return newArray
    }

    // get the smallest value for the array
    const smallest = findSmallest(array);
    // push the smallest onto the new array
    newArray.push(array[smallest]);
    // remove it from the original array
    array.splice(smallest,1)

    // recursive bit
    return selectionSort(array, newArray)
}

module.exports = selectionSort;