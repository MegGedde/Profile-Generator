const fs = require('fs');

let htmlTemplate = "";

const generatePage = (employeeData
  ) => {
      if(!employeeData
        ) {
        return '';
      }
      htmlTemplate = `
        <!DOCTYPE html>
        <html lang="en">
    
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Portfolio Demo</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
          <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
          <link rel="stylesheet" href="./src/style.css">
          </head>
      
        <body>
          <header>
              <h1 class="page-title text-secondary bg-dark">Team Information</h1>
          </header>
        
      
    
          <section class="team-display card-columns">
          ${employeeData.filter(({ role }) => role === "Manager")
          .map(({ name, role, id, email, office}) => {
              return `
              <div class="team-member card p-4">
                <div class="card-title">
                  <h1>${name}</h1>
                  <h2>${role}</h2>
                </div>
                <div class="card-text">
                  <p>Employee Id: ${id}</p>
                  <p>Email: <a href="mailto:${email}">${email}</a></p>
                  <p>Office: ${office}</p>
                </div>  
              </div>
              `;
          })
      .join('')}
  
          ${employeeData

          .filter(({ role }) => role === "Engineer")
          .map(({ name, role, id, email, github}) => {
              return `
              <div class="team-member card p-4">
                <div class="card-title">
                  <h1>${name}</h1>
                  <h2>${role}</h2>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Employee Id: ${id}</li>
                  <li class="list-group-item>Email: <a href="mailto:${email}">${email}</a></li>
                  <li class="list-group-item>GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></li>
                </ul>
                  </div>
              `;
          })
          .join('')}
      
          ${employeeData

          .filter(({ role }) => role === "Intern")
          .map(({ name, role, id, email, school}) => {
              return `
              <div class="team-member">
                  <h1>${name}</h1>
                  <h2>${role}</h2>
              
                  <p>Employee Id: ${id}</p>
                  <p>Email: <a href="mailto:${email}">${email}</a></p>
                  <p>School: ${school}</p>
              </div>
              `;
          })
      .join('')}
          </section>
      </body>
      </html>
`

  writeFile(htmlTemplate);
};

const writeFile = htmlTemplate => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', htmlTemplate, err =>{ 
          if (err) {
              reject(err);
              return;
          }
          // if everything went well, resolve the promise
          resolve({
              ok: true,
              message: 'file created!'
          });
      });
  });
};

module.exports = generatePage, writeFile;