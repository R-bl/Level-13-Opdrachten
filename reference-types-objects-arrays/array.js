let person = { name: 'Raymond', age: 30, evaluations: [7, 10, 9] };

// log Person
console.log(person);

//log name
console.log(person.name);

//log age
console.log(person['age']);

//log evaluations values
console.log(person.evaluations);



//Create array called selectColors
let array = [];

//add elements to array
array = ['Green', 'Blue', 'Red', ];

//add 4th+5h element to the array (yellow and 5) +Object (greeting)
array.push('Yellow', 5, { greeting: "hi ik ben een object" });

//log selectColors
console.log(array);

//log the length of array
console.log(array.length);

//log first element of array
console.log(array[0]);

//log last element of array
console.log(array[2])

//log greeting
array.greeting = "hi ik ben een object";
console.log(array.greeting);