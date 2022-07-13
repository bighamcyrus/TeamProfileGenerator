class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
    getName()
    {
        return this.name
    };
    getId()
    {
        return this.id
    };
    getEmail()
    {
        return this.email
    };
    getRole()
    {        
        return "Employee";
    }
  
    printInfo() {
      console.log(`name: ${this.name}`);
      console.log(`id: ${this.id}`);
      console.log(`email: ${this.email}`);
    }
  }
  
  const employee = new Employee(" ", 25);
  
  employee.printInfo();

  module.exports = Employee;