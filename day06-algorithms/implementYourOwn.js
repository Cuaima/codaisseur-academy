
// ASSIGNMENT:
// Implement your own versions of map, filter, and reduce manually by using a for loop. 
// These should be generic implementations, meaning that if you would not have map, 
// reduce and filter available in JavaScript you could use these functions instead.

const route1 = [2.1, 3.5, 0.3, 5.2]

function compareOutputs(a,b) {
    return JSON.stringify(a) === JSON.stringify(b)
}

function kilometerToMile(km) {
  return km / 1.6
}


// own version of map()

const ownMap = (inArray, callback) => {
    let outArray = []
    for (let i=0; i<inArray.length; i++) {
        if (callback) {
             outArray[i] = callback(inArray[i]) 
        } else {
            outArray[i] = inArray[i]
        }
    }
    return outArray
}

const routeInMilesRewritten = route => route.map( element => kilometerToMile(element) )
console.log('===============================================================================');
console.log("routeInMilesRewritten returns: ", JSON.stringify(routeInMilesRewritten(route1)))
console.log("routeInMilesOwnMap returns: ", JSON.stringify(ownMap(route1, kilometerToMile)))
// test
console.log("new output is the same as old output: ", compareOutputs( routeInMilesRewritten(route1), ownMap(route1, kilometerToMile)) );








const longStretchesRewritten = route => route.filter(element => element > 2)
console.log('===============================================================================');
console.log("longStretchesRewritten returns: ", JSON.stringify(longStretchesRewritten(route1)))

// test
console.log("new output is the same as old output: ");









const totalRewritten = route => route.reduce((a,b) => a+b); 
console.log('===============================================================================');
console.log("totalRewritten returns: ", totalRewritten(route1));

// test
console.log("new output is the same as old output: ");
console.log('===============================================================================');
