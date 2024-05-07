// Define a class named Person
class Person {
    // Instance variables
    String name;
    int age;
    
    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Method to display information about the person
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

// Main class
public class Main {
    public static void main(String[] args) {
        // Create an instance of Person
        Person person1 = new Person("Alice", 30);
        
        // Call the displayInfo method
       
