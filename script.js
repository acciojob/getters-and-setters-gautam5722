//complete this code
class Person {
	constructor(name, age)
	{
		this._name = name;
		this._age = age;
	}

	get name(){
		return this._name;
	}

	set age(newAge) {
        if (typeof newAge === "number" && newAge >= 0) {
          this._age = newAge;
        } else {
          console.error("Please enter a valid age (non-negative number).");
        }
    }

    get age(){
        return this._age;
    }
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
