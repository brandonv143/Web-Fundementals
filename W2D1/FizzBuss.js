//Run code 1-100
//Multiple of 3 print "Fizz"
//Multiple of 2 and 5 print "Buzz"
//For numbers which are multiples of both 3 and 5 print "FizzBuzz"

for(var i=0; i<=100; i++)
if(i%3===0 && i%5===0){
console.log('FizzBuzz')
} else if(i%3===0){
    console.log('Fizz')
} else if(i%5 ===0){
    console.log('Buzz')
} else {
    console.log(i)
}
