// ASSIGNMENT:
// Rewrite the functions to use route.map(), route.filter(), route.reduce()

const route1 = [2.1, 3.5, 0.3, 5.2]

function compareOutputs(a,b) {
    return JSON.stringify(a) === JSON.stringify(b)
}

function kilometerToMile(km) {
  return km / 1.6
}

function shouldReturnTen(input) {
    return kilometerToMile(input)
}
console.log('===============================================================================');
console.log("Test for kilometerToMile:")
console.log("should return ten (dividing 16 by 1.6): ", shouldReturnTen(16));





function routeInMiles(route) {
  // rewrite ...
  const res = []
  for (let i = 0; i < route.length; i++) { // iterate
    const mile = kilometerToMile(route[i]) // transform, select
    res[i] = mile                        // keep
  }
  return res
}

console.log('===============================================================================');
console.log("original routeInMiles returns: ", JSON.stringify(routeInMiles(route1)))

const routeInMilesRewritten = route => route.map( element => kilometerToMile(element) )
console.log("routeInMilesRewritten returns: ", JSON.stringify(routeInMilesRewritten(route1)))


// test
console.log("new output is the same as old output: ", compareOutputs( routeInMiles(route1),  routeInMilesRewritten(route1) ))



function longStretches(route) {
  // rewrite ...
  const res = []
  for (let i = 0; i < route.length; i++) { // iterate
    let stretch = route[i]               // select
    if (stretch > 2) {                   // check
      res.push(stretch)                // keep
    }
  }
  return res
}

console.log('===============================================================================');
console.log("original longStretches returns: ", JSON.stringify(longStretches(route1)))

const longStretchesRewritten = route => route.filter(element => element > 2)
console.log("longStretchesRewritten returns: ", JSON.stringify(longStretchesRewritten(route1)))

// test
console.log("new output is the same as old output: ", compareOutputs( longStretches(route1), longStretchesRewritten(route1) ) );






function total(route) {
  // rewrite ...
  let res = 0
  for (let i = 0; i < route.length; i++) { // iterate
    res += route[i]                      // transform, select 
  }
  return res
}

console.log('===============================================================================');
console.log("original total returns: ", total(route1));

const totalRewritten = route => route.reduce((a,b) => a+b); 

console.log("totalRewritten returns: ", totalRewritten(route1));

// test
console.log("new output is the same as old output: ", compareOutputs( total(route1), totalRewritten(route1) ) );
//console.log(total(route1) === 11.1)
console.log('===============================================================================');
