const inquirer = require('inquirer');

class Program {
    initializeProgram = function() {
 
    inquirer.prompt([
    {
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
      }},
      {
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
      }},
      {
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
      }},
      {
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
      }},
    ])};

    addMembers = data = function() {
            // If there's no 'employees' array property, create one
        if (!data.employees) {
        data.employees = [];
        }
        inquirer.prompt([
      {
        type: 'list',
        name: 'role',
        message: 'Would you like to add a team member or finish building your team?',
        choices: ['Add Engineer','Add Intern','Finish Team']
      },
      //If selected engineer
      {
        type: 'input',
        name: 'name',
        message: "What is your Engineer's name?",
        when: ({ role }) => {
            if (role) {
              return 'Engineer';
            } else {
              return false;
            }
          }},
      {
        type: 'input',
        name: 'id',
        message: "What is your Engineer's employee ID?",
        when: ({ role }) => {
            if (role) {
              return 'Engineer';
            } else {
              return false;
            }
          }},
      {
        type: 'input',
        name: 'email',
        message: "What is your Engineer's email address?",
        when: ({ role }) => {
            if (role) {
              return 'Engineer';
            } else {
              return false;
            }
          }},
      { type: 'input',
        name: 'github',
        message: "What is your Engineer's github?",
        when: ({ role }) => {
          if (role) {
            return 'Engineer';
          } else {
            return false;
          }
        }
      },
      //If selected Intern
      {
        type: 'input',
        name: 'name',
        message: "What is your Intern's name?",
        when: ({ role }) => {
            if (role) {
              return 'Intern';
            } else {
              return false;
            }
          }},
      {
        type: 'input',
        name: 'id',
        message: "What is your Intern's employee ID?",
        when: ({ role }) => {
            if (role) {
              return 'Intern';
            } else {
              return false;
            }
          }},
      {
        type: 'input',
        name: 'email',
        message: "What is your Intern's email address?",
        when: ({ role }) => {
            if (role) {
              return 'Intern';
            } else {
              return false;
            }
          }},
      { type: 'input',
        name: 'school',
        message: "What is your Intern's school?",
        when: ({ role }) => {
          if (role) {
            return 'Intern';
          } else {
            return false;
          }
        }
      }
    ])
    .then(data => {
        data.employees.push(data);
        if (role === 'Finish Team') {
          return data;
        } else {
            return addMembers(data);
        }
      });
    };

initializeProgram()
    .then(addMembers)
    .then((data) => {
        console.log(data);
        const createFile = generateMarkdown(data);
        fs.writeFile('./dist/index.html', createFile, err => {
          if (err) {
            reject(err);
            return;
          } else {
            console.log('File created!');
          };
        })
    })
}
};

module.exports = Program;
