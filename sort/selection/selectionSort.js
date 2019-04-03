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
const selectionSort = (array) => {
    // new array to create containing the sorted elements
    const newArray = [];
    // original size of the array to sort
    const arraySize = array.length;
    // loop through the array size
    // each time pass the array to the
    // findSmallest() function, then ad the return from
    // that function to the newArray and remove it from the 
    // original array.  Then it loops again with the array
    // one element smaller.
    for (let i =0; i<arraySize; i++) {
        const smallest = findSmallest(array);
        newArray.push(array[smallest]);
        array.splice(smallest,1)
    }
    return newArray;
}

module.exports = selectionSort;