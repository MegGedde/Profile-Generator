const inquirer = require('inquirer');

//create command line
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is your team member's name?",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter their name')
            return false;
          }
      }},
      { type: 'input',
        name: 'github',
        message: 'What is their GitHub Username?',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Enter their github')
            return false
          }
        }
      },
      {
        type: 'list',
        name: 'role',
        message: 'What role is this employee in?',
        choices: ['Employee','Engineer','Manager','Intern']
      },
      { type: 'input',
        name: 'officeNumber',
        message: 'What is their office number?',
        when: ({ role }) => {
          if (role) {
            return 'Manager';
          } else {
            return false;
          }
        }
      },
      { type: 'input',
        name: 'github',
        message: 'What is their github?',
        when: ({ role }) => {
          if (role) {
            return 'Engineer';
          } else {
            return false;
          }
        }
      },
      { type: 'input',
        name: 'school',
        message: 'What is their school?',
        when: ({ role }) => {
          if (role) {
            return 'Intern';
          } else {
            return false;
          }
        }
      }
    ])
    .then((data) => {
        console.log(data);
        const createFile = generateMarkdown(data);
        fs.writeFile('./dist/README.md', createFile, err => {
          if (err) {
            reject(err);
            return;
          } else {
            console.log('File created!');
          };
        })
    });
