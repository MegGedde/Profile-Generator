const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email)
        
        this.role = "Intern";
    }
    getSchool(school) {
        this.school = school;
    }
}

module.exports = Intern;