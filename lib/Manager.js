const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(office) {
        super();
        this.officeNumber = office;
        this.role = "Manager";
    }
}

module.exports = Manager;