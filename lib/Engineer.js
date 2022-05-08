const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email)
        
        this.role = "Engineer";
    }
    getGitHub(github) {
    // github
    this.github = github;
}
}

module.exports = Engineer;