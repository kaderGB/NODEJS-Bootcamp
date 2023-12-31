//Modules:: Allows to reUsed the code so we don't have to write the file again and again

const greet = require("./greet");
const {person1,person2,person3} = require("./person");
greet(person1);