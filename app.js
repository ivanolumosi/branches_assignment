// Define a function to greet the user
function greetUser(name) {
    console.log("Hello, " + name + "!");
  }
  
  // Call the greetUser function with a name
  greetUser("John");
  
  // Define an object representing a person
  var person = {
    name: "Alice",
    age: 30,
    occupation: "Engineer",
    greet: function() {
      console.log("Hi, my name is " + this.name + ".");
    }
  };
  
  // Call the greet method of the person object
  person.greet();
  
  // Define an array of numbers
  var numbers = [1, 2, 3, 4, 5];
  
  // Iterate over the array and print each number multiplied by 2
  numbers.forEach(function(number) {
    console.log(number * 2);
  });
  