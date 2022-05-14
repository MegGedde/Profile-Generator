const Engineer = require('../lib/Engineer');

test('can get github name', () => {
    const engineer = new Engineer('Fred', '2', 'asdf@yahoo', 'fredscode')

   expect(engineer.github).toEqual('fredscode')
})

test('can use getGithub method', () => {
    const engineer = new Engineer('Fred', '2', 'asdf@yahoo', 'fredscode')

    expect(engineer.getGitHub()).toEqual('fredscode');
})

test("does role method work", () => {
    const engineer = new Engineer('Fred');
    //check role
    expect(engineer.role).toEqual('Engineer');
});