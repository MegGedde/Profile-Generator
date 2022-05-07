const Employee = require('../lib/Employee');

test('does Employee have properties', () => {
    const employee = new Employee('Rachel');

    expect(Employee.name).toBe('Rachel');
    expect(Employee.id).toEqual(expect.any(Number));
    expect(Employee.email).toEqual(expect.any(String));
   });

test("does name method work", () => {
    const employee = new Employee('Rachel');
    //check name
    expect(employee.getName()).toEqual('Rachel');
   });

test("does Id method work", () => {
    const employee = new Employee('Rachel');
        //check ID
        expect(employee.getId()).toEqual(expect.stringContaining(employee.Id.toString()));
    });

test("does email method work", () => {
        const employee = new Employee('Rachel');
        //check email
        expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    });

test("does role method work", () => {
        const employee = new Employee('Rachel');
        //check role
        expect(employee.getRole()).toEqual(expect.stringContaining(employee.email.toString()));
    });

