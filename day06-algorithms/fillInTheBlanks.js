// At the question marks, fill in one of the options: transform, select, reduce, map, or filter

const route1 = [2.1, 3.5, 0.3, 5.2] // a route of different stretches in kilometers

const distance1 = route1[0]               // select
const distance1InMiles = distance1 / 1.6  // transform

// what does this function do? 
// accepts one argument, divide it by 1.6 and returns the result of the division
function kilometerToMile(km) {
  return km / 1.6
}

// what does this function do? ...
// accepts one argument, an array - iterates through each element of the array, 
// and increases the value of res by the value of each element; once all elements 
// of the array are processed, will return the result
function total(route) {
  let res = 0
  for (let i = 0; i < route.length; i++) { // iterate
    res += route[i]                      // transform, select
  }
  return res
}

// what does this function do? ...
// accepts an array as its argument
// on each element kilometerToMile function will be run
// the returning result from kilometerToMile will be assigned to the output array res at the 
// same index as the element was in the input array
// then returns the result array
function routeInMiles(route) {
  const res = []
  for (let i = 0; i < route.length; i++) { // iterate
    const mile = kilometerToMile(route[i]) // transform, select
    res[i] = mile                        // keep
  }
  return res
}

// what does this function do? ...
// accepts an array as its argument
// iterates through inout array
// if input array's current element is larger than 2, pushes this element to output array
// then returns output array
function longStretches(route) {
  const res = []
  for (let i = 0; i < route.length; i++) { // iterate
    let stretch = route[i]               // select
    if (stretch > 2) {                   // check
      res.push(stretch)                // keep
    }
  }
  return res
}
