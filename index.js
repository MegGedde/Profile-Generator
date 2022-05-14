const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/generatePage');
const inquirer = require('inquirer');
const { writeFile } = require('fs');

const employees = []

const initializeProgram = () => {
// start with manager's information
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
          validate: idInput => {
            if (idInput) {
              return true;
            } else {
              console.log('Please enter their employee ID as a number')
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
            console.log(`${name} has joined your team as manager`);
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
      getInfo(role);
    }})
};

const getInfo = function(employeeRole) {
  inquirer.prompt({
  type: 'input',
  name: 'name',
  message: "What is your employee's name?",
  validate: nameInput => {
    if (nameInput) {
    return true;
    } else {
    console.log('Please enter their name')
    return false;
    }}
  })
  .then(({ name }) => {
    let employee = new Employee(name);
  
    inquirer.prompt({
      type: 'input',
      name: 'id',
      message: "What is your Employee's ID?",
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter their employee ID as a number')
          return false;
        }
      }
    })
      .then(({ id }) => {
        employee.id = id

        inquirer.prompt({
          type: 'input',
          name: 'email',
          message: "What is your Employee's email address?",})
          .then(({ email }) => {
            employee.email = email
            //add Engineer
            if (employeeRole === 'Add Engineer') {
              let engineer = new Engineer(employee.name, employee.id, employee.email);
              inquirer.prompt({
                  type: 'input',
                  name: 'github',
                  message: "What is your Engineer's github?",
              })
              .then(({ github }) => {
              engineer.github = github;
                employees.push(engineer);
                console.log(`${name} has joined your team`);
                addEmployee();
            });
            //add Intern
           } else {
            let intern = new Intern(employee.name, employee.id, employee.email);
            inquirer.prompt({
              type: 'input',
              name: 'school',
              message: "What is your Intern's school?"
            })
            .then(({ school }) => {
              intern.school = school;
                employees.push(intern);
                console.log(`${name} has joined your team`);
                addEmployee();
            })
            };
          });
        });
    });
 console.log(employees);
};
 
module.exports = employees;
initializeProgram()