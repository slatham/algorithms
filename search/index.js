// require our binary search module
const binarySearch = require('./binary/binarySearch');

// function to create a large sequential array
const fillRange = (start, end) => {
    return Array(end - start + 1).fill().map((item, index) => start + index);
 }

 /**
  * 
  * Function to do the search
  * @param {String} type - binary / builtIn / forLoop 
  * @param {Array} array - large array to work on
  * @param {Int} item - item to search for
  * @param {Function} cb - call back function once complete
  */
function doSearch(type, array, item, cb) {
    switch(type) {
        case 'binary':
            console.log(binarySearch(array, item))
            cb();
            break;
        case 'forLoop':
            for (let i = 0; i < size; i++) {
                if (array[i] === item) {
                    console.log(i)
                }
            }
            cb();
            break;
        case 'builtIn':
            console.log(array.findIndex((el) => el === item));
            cb();
            break;

    }
}

// set up the array and fill it
const size = 10000000;
const massiveArray = fillRange(0, size -1);
// start the timer!
const start1 = process.hrtime();

// run the function to do the search
doSearch('binary', massiveArray, 5555555, () => {
    // now, in this callback function, stop the timer
    const end = process.hrtime(start1)
    // print out the time it took
    console.log(`Binary search took ${end[0]} seconds ${end[1] / 1000000} milliseconds`);
});
// start the timer!
const start2 = process.hrtime();
// run the function to do the search
doSearch('forLoop', massiveArray, 5555555, () => {
    // now, in this callback function, stop the timer
    const end = process.hrtime(start2)
    // print out the time it took
    console.log(`For loop search took ${end[0]} seconds ${end[1] / 1000000} milliseconds`);
});
// start the timer!
const start3 = process.hrtime();
// run the function to do the search
doSearch('builtIn', massiveArray, 5555555, () => {
    // now, in this callback function, stop the timer
    const end = process.hrtime(start3)
    // print out the time it took
    console.log(`Built in search took ${end[0]} seconds ${end[1] / 1000000} milliseconds`);
});