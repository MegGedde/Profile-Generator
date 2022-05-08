const Engineer = require('../lib/Engineer');

test('can get github name', () => {
    const engineer = new Engineer('Fred')

   expect(engineer.github).toEqual(expect.any(String))
})

test('can use getGithub method', () => {
    const engineer = new Engineer('Fred')

    expect(engineer.getGithub()).toEqual(expect.stringContaining(manager.github.toString()));
})

test("does role method work", () => {
    const engineer = new Engineer('Fred');
    //check role
    expect(engineer.role).toEqual('Engineer');
});