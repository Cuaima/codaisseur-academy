console.log(`
== 1. =============================================`);
console.log(`Use for to iterate through an array of fruits.
`);

let fruits = ['apples', 'oranges', 'pears', 'apricots'];

let i = 0; 

for (; i < fruits.length ;) { 
    console.log(`I love: ${fruits[i]}`);
    i++;
}

console.log(`
== 2. =============================================`);
console.log(`You will bake a frittata. The steps are in order, 
so please use an array for the steps. 
Also, please use a forEach.
`);

let steps = [ 'cut and bake vegetables in a frying pan',
'stir 6 eggs and 100 gram of ricotta',
'add ricotta to the baked vegetables',
'after 5 minutes, turn frittata, sprinkle parmaggiano over it',
'bake frittata, under a cover, and in the oven for 8 minutes' ];

steps.forEach( function(element, index) {
    console.log(`${index}: ${element}`);
});

console.log(`
===================================================
`);
