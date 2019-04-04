const sum = (list) => {
    // base case is when there's just 1 element
    // left
    if (list.length === 1) {
        return list[0]
    }
    // recursive bit
    const item = list.shift();
    return item + sum(list);
}
console.log(sum([1,2,3,4,5]))