function introduction (input, ...dynamicData) {
    console.log(input);
    console.log(dynamicData);
    
} 

const name = "John";
const age = 30;
introduction`Hi, my name is ${name}, and I am ${age} years old.`;