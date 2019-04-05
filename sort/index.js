const selectionSort = require('./selection/selectionSort');
const selectionSortRecursive = require('./selection/selectionSortRecursive');
const quickSort = require('./quicksort/quicksort');
/**
 * 
 * @param {String} type 
 * @param {Array} array 
 * @param {Function} cb 
 */
function doSort(type, array, cb) {
    // remember array is pass by reference,
    // so we need to make a copy so as not to 
    // affect it for other tests
    const workingArray = [...array];
    switch (type){
        case 'selectionSort': {
            selectionSort(workingArray);
            cb();
            break;
        }
        case 'builtIn': {
            workingArray.sort();
            cb();
            break;
        }
        case 'selectionSortRecursive': {
            selectionSortRecursive(workingArray);
            cb();
            break;
        }
        case 'quickSort': {
            quickSort(workingArray);
            cb();
            break;
        }
    }
}

// set up the array and fill it
const size = 7000;
// randomly generated N = 40 length array 0 <= A[N] <= 39
const randomArray = Array.from({length: size}, () => Math.floor(Math.random() * size));

// start the timer!
const start1 = process.hrtime();
// run the function to do the search
doSort('selectionSort', randomArray, () => {
    // now, in this callback function, stop the timer
    const end = process.hrtime(start1)
    // print out the time it took
    console.log(`Selection Sort took ${end[0]} seconds ${end[1] / 1000000} milliseconds`);
});


// start the timer!
const start2 = process.hrtime();
doSort('builtIn', randomArray, () => {
    // now, in this callback function, stop the timer
    const end = process.hrtime(start2)
    // print out the time it took
    console.log(`BuiltIn Sort took ${end[0]} seconds ${end[1] / 1000000} milliseconds`);
});

// start the timer!
const start3 = process.hrtime();
doSort('selectionSortRecursive', randomArray, () => {
    // now, in this callback function, stop the timer
    const end = process.hrtime(start3)
    // print out the time it took
    console.log(`Recursive Selection Sort took ${end[0]} seconds ${end[1] / 1000000} milliseconds`);
});

// start the timer!
const start4 = process.hrtime();
doSort('quickSort', randomArray, () => {
    // now, in this callback function, stop the timer
    const end = process.hrtime(start4)
    // print out the time it took
    console.log(`Quick Sort took ${end[0]} seconds ${end[1] / 1000000} milliseconds`);
});