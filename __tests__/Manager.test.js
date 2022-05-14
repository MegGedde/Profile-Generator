const Manager = require('../lib/Manager');

test('can get office number', () => {
    const manager = new Manager('David', '4', 'sadf@yahoo', '9')

   expect(manager.office).toEqual('9')
})

test("does role method work", () => {
    const manager = new Manager('David');
    //check role
    expect(manager.getRole()).toEqual('Manager');
});