console.log("== 1. =============================================");
console.log(`Create a program that starts counting at 5. 
It counts up to (including) 50, and count only every 
fifth number. Use a while loop to build it`);
let i = 5;
while ( i <= 50 ) {
    if ( i % 5 == 0 ) { 
        console.log(i);
    }
    i += 1;
}
console.log("== 2. =============================================");
console.log("Change the while loop like so: while (true)");
let j = 5;
while (true) {
    if ( j % 5 == 0 && j <= 50 ) { 
        console.log(j);
    } else if (50 < j) { 
        break; 
    }
    j += 1;
}
console.log("== 3. =============================================");
console.log(`Create a program that starts counting at 5. 
It counts up to (including) 50, and count only every 
fifth number. Build it with a for loop`);
for ( let k = 5; k <= 50; k++ ) {
    if ( k % 5 == 0 ) {
        console.log(k);
    }
}
console.log("== 4. =============================================");
console.log("Change the for loop like so: for (;true;)"); 
let l = 5;
for (;true;) { 
    if ( l % 5 == 0  && l <= 50 ) {
        console.log(l);
    } else if ( 50 < l ) {
        break;
    }
    l += 1;
}
