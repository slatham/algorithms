const count = (list) => {

    // base case
    if(list[0] === undefined) {
        return 0
    }
    list.pop();
    return 1 + count(list);
}

console.log(count([1,2,3,4,5,6,7,8,9,10]))