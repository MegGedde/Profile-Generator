const inquirer = require('inquirer');


class Employee {
     constructor(name = '', id = '', email = '') {
     // name
     this.name = name;
     // id
     this.id = id;     
     // email
     this.email = email;
     this.role = "Employee";
     };
// getName()
      getName() {
          return this.name;
      };
// getId()
      getId() {
          return this.id;
      };
// getEmail()
      getEmail() {
        return this.email;
      };
// getRole() 
    getRole() {
        return this.role;
    };
};

module.exports = Employee;