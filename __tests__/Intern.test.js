const Intern = require('../lib/Intern');

test('can get school name', () => {
    const intern = new Intern('Sammy', '3', 'sadf@yahoo', 'UMD')

   expect(intern.school).toEqual('UMD')
})

test('can use getSchool method', () => {
    const intern = new Intern('Sammy', '3', 'sadf@yahoo', 'UMD')

    expect(intern.getSchool()).toEqual('UMD');
})

test("does role method work", () => {
    const intern = new Intern('Sammy');
    //check role
    expect(intern.getRole()).toEqual('Intern');
});