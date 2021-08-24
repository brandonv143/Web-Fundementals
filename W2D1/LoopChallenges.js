//Print odds 1-20
//Using a loop write code that will console.log all of the odd values from 1 up to 20.

for(var i=1; i<20; i+=3) {
    console.log(i);
}

// Decreasing Multiples of 3   
//Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.

for(var i=100; i>=0; i--){
    if(i%3==0)
    console.log(i);
}

//Print the sequence
//Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5

var x = [4, 2.5, 1, -0.5, -2, -3.5];

    for(var i=0; i<x.length; i++){
        console.log(x[i]);
    }

//Sigma
//Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log
//the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

total = 0

for(var sum=1; sum<=100; sum++){
    if(total = total+sum){
        console.log(total);
    }
}

//Factorial
//Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log
//the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

