const binarySearch = (list, item) => {
    if (list.length === 1) {
        if(list[0] === item) {
            //console.log(item)
            return item;
        }
        return false
    }
    // find the mid point of the range
    const mid = Math.floor(((list.length - 1) / 2));
    // find the mid point value
    const guess = list[mid];
    // if we were lucky, early return
    if (guess === item) {
        return item
    }
    // if the mid point element is too high
    if (guess > item) {
        // we can rule out everything
        // higher than our mid point
        high = mid -1;
        halfList = list.slice(0, high +1);
        // low stays the same
    }
    // if the mid point element is too low
    if (guess < item) {
        // we can rule out everything 
        // below the mid point
        low = mid + 1;
        halfList = list.slice(low,list.length)
    }
    // recursive bit
    return binarySearch(halfList, item);
}
module.exports = binarySearch;