const binarySearch = (list, item) => {
    // range where our item
    // might exist
    let low = 0;    // start at zero to
    let high = list.length - 1;  // the end of the list 
    // while there is a range our item
    // could exist in
    while (low <= high) {     
        // find the mid point of the range
        const mid = Math.floor(((low + high) / 2));  
        // see if the mid point matches our item
        const guess = list[mid];  
        // if it does return the position of it
        if (guess === item){
            return mid;
        }
        // if the mid point element is too high
        if (guess > item) {
            // we can rule out everything
            // higher than our mid point
            high = mid -1;
            // low stays the same
        }
        // if the mid point element is too low
        if (guess < item) {
            // we can rule out everything 
            // below the mid point
            low = mid + 1;
        }
    }
    // no match found
    return false;
}
module.exports = binarySearch;