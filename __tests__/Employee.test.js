const Employee = require('../lib/Employee');

test('does Employee have properties', () => {
    const employee = new Employee('Rachel', '1', 'rachel@yahoo.com');

    expect(employee.name).toEqual('Rachel');
    expect(employee.id).toEqual('1');
    expect(employee.email).toEqual('rachel@yahoo.com');
   });

test("does name method work", () => {
    const employee = new Employee('Rachel');
    //check name
    expect(employee.getName()).toEqual('Rachel');
   });

test("does Id method work", () => {
    const employee = new Employee('Rachel');
        //check ID
        expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
    });

test("does email method work", () => {
        const employee = new Employee('Rachel');
        //check email
        expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    });

test("does role method work", () => {
        const employee = new Employee('Rachel');
        //check role
        expect(employee.getRole()).toEqual('Employee');
    });

