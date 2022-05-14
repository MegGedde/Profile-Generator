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
              <h1 class="page-title text-dark text-center bg-info p-3">Team Information</h1>
          </header>
        
      
    
          <section class="team-display card-columns row">
          ${employeeData.filter(({ role }) => role === "Manager")
          .map(({ name, role, id, email, office}) => {
              return `
              <div class="col-3 mx-auto">
              <div class="team-member card p-2 mx-auto">
                <div class="card-title bg-info">
                  <h1>${name}</h1>
                  <h2>${role}</h2>
                </div>
                <div class="card-text text-info">
                  <p>Employee Id: ${id}</p>
                  <p>Email: <a href="mailto:${email}">${email}</a></p>
                  <p>Office: ${office}</p>
                </div>  
              </div>
              </div>
              `;
          })
      .join('')}
  
          ${employeeData

          .filter(({ role }) => role === "Engineer")
          .map(({ name, role, id, email, github}) => {
              return `
              <div class="col-3 mx-auto">
              <div class="team-member card p-2 mx-auto">
                <div class="card-title bg-info">
                  <h1>${name}</h1>
                  <h2>${role}</h2>
                </div>
                <div class="card-text text-info">
                  <p>Employee Id: ${id}</p>
                  <p>Email: <a href="mailto:${email}">${email}</a></p>
                  <p>GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></p>
                </div>
                  </div>
                  </div>
              `;
          })
          .join('')}
      
          ${employeeData

          .filter(({ role }) => role === "Intern")
          .map(({ name, role, id, email, school}) => {
              return `
              <div class="col-3 mx-auto">
              <div class="team-member card p-2 mx-auto">
              <div class="card-title bg-info">
                  <h1>${name}</h1>
                  <h2>${role}</h2>
              </div>
              <div class="card-text text-info">
                  <p>Employee Id: ${id}</p>
                  <p>Email: <a href="mailto:${email}">${email}</a></p>
                  <p>School: ${school}</p>
                  </div>
              </div>
              </div>
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