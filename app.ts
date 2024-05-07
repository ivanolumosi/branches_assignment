// Define an interface for a Person
interface Person {
    name: string;
    age: number;
    occupation: string;
    greet(): void;
  }
  
  // Define a class implementing the Person interface
  class Employee implements Person {
    constructor(public name: string, public age: number, public occupation: string) {}
  
    // Implement the greet method
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  }
  
  // Create an instance of Employee
  const employee1 = new Employee("Alice", 30, "Engineer");
  
  // Call the greet method
  employee1.greet();
  
  // Define a function to calculate the area of a rectangle
  function calculateRectangleArea(width: number, height: number): number {
    return width * height;
  }
  
  // Call the function
  const area = calculateRectangleArea(5, 10);
  console.log("Area of rectangle:", area);
  