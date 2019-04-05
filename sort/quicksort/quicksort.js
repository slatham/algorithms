const quickSort = (list) => {
    // base case
    if(list.length <= 1) {
        return list
    }

    //const mid = Math.floor(list.length / 2);
    const random = Math.floor(Math.random()*list.length);
    const pivot = list[random]

    list.splice(random,1);

    // choose a pivot point 
    //const pivot = list.shift();

    const lessThanPivot = list.filter((el) => el <= pivot);

    const moreThanPivot = list.filter((el) => el > pivot);

    return quickSort(lessThanPivot) + pivot + quickSort(moreThanPivot);
}
//console.log(quickSort([2,3,1,5,4,77,55,99]))
module.exports = quickSort