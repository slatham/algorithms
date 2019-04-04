// method is to compare one element to the one next to it
const max = (list) => {

    // base case there's only 2 in the list
    if(list.length === 2) {
        return list[0] > list[1] ? list[0] : list[1] 
    }
    
    const item = list.shift()
    //recursive bit
    return item > max(list) ? item : max(list)
}

console.log(max([28,48,6,77,99,40]));