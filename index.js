const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');

const employees = []

const initializeProgram = () => {
//start with manager's information
    inquirer
    .prompt({
        type: 'input',
        name: 'name',
        message: "What is your team manager's name?",
        validate: nameInput => {
              if (nameInput) {
              return true;
              } else {
              console.log('Please enter their name')
              return false;
              }
    }})
    .then(({ name }) => {
      let manager = new Manager(name);
      manager.name = name;
    
      inquirer.prompt({
          type: 'input',
          name: 'id',
          message: "What is your team manager's employee ID?",
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter their employee ID')
              return false;
            }
        }})
      .then(({ id }) => {
        manager.id = id;

        inquirer.prompt({
            type: 'input',
            name: 'email',
            message: "What is your team manager's email address?",
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter their email address')
                return false;
              }
          }})
        .then(({ email }) => {
          manager.email = email;

          inquirer.prompt({
              type: 'input',
              name: 'office',
              message: "What is your team manager's office number?",
              validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter their office number')
                  return false;
                }
            }
          })
          .then(({ office }) => {
            manager.office = office;
            //add manager to employee array
            employees.push(manager);
            //ask to add more team members
            addEmployee();
          });
        }); 
        });
      });
    };

const addEmployee = () => {
  inquirer.prompt(
    {
      type: 'list',
      name: 'role',
      message: 'Would you like to add a team member or finish building your team?',
      choices: ['Add Engineer','Add Intern','Finish Team']
    })
    .then(({ role }) => {
      if (role === 'Finish Team') {
      console.log("Your team page has been created.")
      generatePage(employees)
    } else {
      //getInfo(role);
    }})
};

const getInfo = () => {

}
 

initializeProgram()