const Manager = require('../lib/Manager');

test('can get office number', () => {
    const manager = new Manager('David')

   expect(manager.officeNumber).toEqual(expect.any(Number))
})

test("does role method work", () => {
    const manager = new Manager('David');
    //check role
    expect(manager.getRole()).toEqual('Manager');
});