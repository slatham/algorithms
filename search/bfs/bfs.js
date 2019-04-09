/** First we define a graph to search
 *  using a hash table to define the
 *  relationships between nodes
 */

// define some people
const ste = {'fullName': 'Stephen Latham', 'age': 38, 'gender': 'male'}
const pauline = {'fullName': 'Pauline Latham', 'age': 60, 'gender': 'female'}
const alan = {'fullName': 'Alan Latham', 'age': 60, 'gender': 'male'}
const mary = {'fullName': 'Mary Pruden', 'age': 86, 'gender': 'female'}
const ronald = {'fullName': 'Ronald Ellison', 'age': 87, 'gender': 'male'}
const john = {'fullName': 'John Ellison', 'age': 104, 'gender': 'male'}
const kate = {'fullName': 'Catherine McGaley', 'age': 111, 'gender': 'female'}

const myGraph = new Map();
myGraph.set(ste, [pauline, alan]);
myGraph.set(pauline, [mary, ronald]);
myGraph.set(alan, []);
myGraph.set(mary, []);
myGraph.set(ronald, [john, kate]);
myGraph.set(john, []);
myGraph.set(kate, []);

/**
 * 
 * 
 *                               |----- mary
 *          |------- pauline ----|                  |----- john
 * ste -----|                    |----- ronald -----|
 *          |------- alan                           |----- kate
 * 
 * 
 * 
 */



// Next we're going to need a queue

// lets include one!
const q = require('../../queue/queueArray');
// set it up
const queue = new q();
// now get my relations from the hash table
const myRelations = myGraph.get(ste);
// add those relations to the queue
myRelations.forEach(element => {
    queue.add(element)
});

console.log(`Queue length = ${queue.size()}`)

// set up a function to define what we're searching for
function search(person) {
    // find closest female relative that is over 80
    if(person.gender === 'female' && person.age > 80){
        return true
    }
    return false
}

while (queue.size() > 0){
    // get the next person on the queue
    const person = queue.last();
    // remove them from the queue
    queue.remove();
    // thing we're searching for
    if(search(person)) {
        console.log(`Found ${person.fullName}`);
        return true
    } else { // not found so add this person's relations to the queue
        myGraph.get(person).forEach(el => {
            queue.add(el);
        })
    }
}
return false
console.log(queue.size());