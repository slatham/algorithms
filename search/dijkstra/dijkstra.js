
/**
 *            
 *            6  -----> A ---- 1      
 *             /        ^       \
 *            /         |       _\|
 *        START         3        FIN
 *            \         |       -/|
 *             \        |      /
 *              ---2--> B --5-/
 * 
 * 
 * 
 */

 // above graph in code...
const graph = new Map();
graph.set('START', new Map([['A',6], ['B',2]]));
graph.set('A', new Map([['FIN', 1]]));
graph.set('B', new Map([['A',3], ['FIN', 5]]));
graph.set('FIN', new Map());



// hash table to store costs
const costs = new Map([['A', 6], ['B', 2], ['FIN',Infinity]]);



// hash table for parents
const parents = new Map([['A', 'START'], ['B', 'START'], ['FIN', 'none']]);



// array to keep track of processed nodes
const processed = [];

// start by finding the lowest neighbour of the start node
// remember the starting hash table for costs has infinity for
// any node not a neighbour of the starting node
let node = findLowestNode(costs);

// while we still have nodes
while (node != 'None') {
    console.log(`Node to be processed: ${node}`)
    // get the cost of the node
    const cost = costs.get(node);
    // get the neighbours of the node
    const neighbours = graph.get(node);
    // loop though neighbours of the node
    neighbours.forEach((value, key) => {
        // total cost to reach each  neighbour
        const newCost = cost + value;
        // if this new combined cost is smaller than
        // our current cost for this node
        if(costs.get(key) > newCost){
            console.log(node)
            // update costs hashtable
            costs.set(key, newCost);
            // update the parents table
            parents.set(key, node);
        }
        
    });
    // mark that we've processed this node
    processed.push(node)
    // get the next lowest node from the updated costs hash table
    node = findLowestNode(costs);
}

function findLowestNode(costs){
    let lowestCost = Infinity;
    let lowestCostNode = 'None'
    // loop though each cost
    costs.forEach((value, key) => {
        const cost = value;
        if (cost < lowestCost && !processed.includes(key)) {
            lowestCost = cost;
            lowestCostNode = key;
        }
    });
    return lowestCostNode;
}

console.log(parents)