const Intern = require('../lib/Intern');

test('can get school name', () => {
    const intern = new Intern('Sammy')

   expect(intern.school).toEqual(expect.any(String))
})

test('can use getSchool method', () => {
    const intern = new Intern('Fred')

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
})

test("does role method work", () => {
    const intern = new Intern('Fred');
    //check role
    expect(intern.getRole()).toEqual('Intern');
});