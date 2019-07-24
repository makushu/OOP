let person = new Person();

describe("intro", function(){
    it ("should output the person's introduction", function(){

        expect(person.intro('a', 'b', 1, 'c', 'd')).toBe('Name: ' + 'a' + ' \nSurname: ' +  +
' \nAge: ' + this.age + ' \nGender: ' + this.gender +
' \nInterests: ' + this.interests + ' \nGreeting: Hello im ' + 'a');

});

});



