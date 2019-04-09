class Queue {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.unshift(item);
    }
    remove() {
        this.data.pop();
    }
    first() {
        return this.data[0];
    }
    last() {
        return this.data[this.data.length -1];
    }
    size() {
        return this.data.length;
    }
}

const myQueue = new Queue();

console.log('Add 3 people to the queue...')

myQueue.add('Stephen');
myQueue.add('Paul');
myQueue.add('Simon');

console.log(`My Queue length is ${myQueue.size()}`);


console.log('Add some more...');

myQueue.add('Jane');
myQueue.add('Joan');
myQueue.add('Tim');

console.log(`My Queue length is ${myQueue.size()}`);
console.log(`Next person in the queue is ${myQueue.last()}`);
console.log(`Last person in the queue is ${myQueue.first()}`)

console.log('Remove the next person from the queue...')
myQueue.remove();

console.log(`My Queue length is ${myQueue.size()}`);

console.log(`Next person in the queue is ${myQueue.last()}`);
console.log(`Last person in the queue is ${myQueue.first()}`)
