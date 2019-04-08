
const myHashTable = new Map();

// add lookups to the hash table
myHashTable.set('Stephen Latham', '06782 763 726');
myHashTable.set('John Smith', '01798 765 872');

// check if key exists.  If it does, look it up in O(1) time
if (myHashTable.has('Stephen Latham')) {
    console.log(myHashTable.get('Stephen Latham'))
}

