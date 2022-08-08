console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 1; i <= 100; i++) {
if(i %2 != 0)
{
console.log(i);
}
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 1; i <= 100; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log(i, "FIZZBUZZ")
    }
    else if(i%3 == 0){
        console.log(i, "FIZZ")
    }
    else if(i%5 == 0){
        console.log(i, "BUZZ")
    }
}

//Exercise 3a Section
console.log("EXERCISE 3a:\n==========\n");
let i = 0;
while(i <= 100)
{
    if(i % 2 != 0)
    {
        console.log(i);
    }
    i++;
}

console.log("EXERCISE 3a:\n==========\n");

let x = 0;
do
{
    if(x %2 != 0)
    {
        console.log(x);
    }
    x++;
} while (x <=100); 

//Exercise 3b Section 
console.log("EXERCISE 3b:\n==========\n");
let j = 0; 
while(j <= 100){
    if(j%3 == 0 && j%5 == 0){
        console.log(j, "FIZZBUZZ");
    }
    else if(j%3 == 0){
        console.log(j, "FIZZ");
    }
    else if(j%5 == 0){
        console.log(j, "BUZZ");
    }
    j++;
}
console.log("EXERCISE 3b:\n==========\n");
let k = 0; 
do{
    if(k%3 == 0 && k%5 == 0){
        console.log(k, "FIZZBUZZ");
    }
    else if(k%3 == 0){
        console.log(k, "FIZZ");
    }
    else if(k%5 == 0){
        console.log(k, "BUZZ");
    }
    k++;
} while(k <= 100)

//Exercise 4
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

let findValue = false; 

for(let y = 0; y<n; y++){
    if (y == value){
        findValue = true; 
        break; 
    }
    findValue= false; 
} 
if(findValue == true){
    console.log("Found Value!");
}
else{
    console.log("Did not find value!");
}

//Exercise 5
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (1 - 10) + 1);
let buzzDivisor = Math.round(Math.random() * (1 - 10) + 1);
let z = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (1 - 10) + 1);

for(start; start <= z; start++){
    if(start%fizzDivisor == 0 && start%buzzDivisor == 0){
        console.log("FIZZBUZZ");
    }
    else if(start%fizzDivisor == 0){
        console.log("FIZZ");
    }
    else if(start%buzzDivisor == 0){
        console.log("BUZZ");
    }
}
