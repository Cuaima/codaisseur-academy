const route1 = [2.1, 3.5, 0.3, 5.2]

function kilometerToMile(km) {
  return km / 1.6
}


function routeInMiles(route) {
  // rewrite ...
  const res = []
  for (let i = 0; i < route.length; i++) { // iterate
    const mile = kilometerToMile(route[i]) // ? ..., ? ...
    res[i] = mile                        // keep
  }
  return res
}

// test
console.log(JSON.stringify(routeInMiles(route1)))

function longStretches(route) {
  // rewrite ...
  const res = []
  for (let i = 0; i < route.length; i++) { // iterate
    let stretch = route[i]               // ? ...
    if (stretch > 2) {                   // check
      res.push(stretch)                // keep
    }
  }
  return res
}

// test
console.log(JSON.stringify(longStretches(route1)))


function total(route) {
  // rewrite ...
  let res = 0
  for (let i = 0; i < route.length; i++) { // iterate
    res += route[i]                      // ? ..., ? ...
  }
  return res
}

// test
console.log(total(route1) === 11.1)
