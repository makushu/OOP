class Person {

    constructor(name, surname, age, gender, interests){
        this.name = name;
        this.surname = surname;
        this.age= age;
        this.gender = gender;
        this.interests = interests;
    }

    intro(){
       return 'Name: ' + this.name + ' \nSurname: ' + this.surname +
        ' \nAge: ' + this.age + ' \nGender: ' + this.gender +
        ' \nInterests: ' + this.interests + ' \nGreeting: Hello im ' + this.name;
        
    }
} 





