class University {
    constructor(teachers = [], students = []) {
        this.teachers = teachers;
        this.students = students;
    }

    addMember(member) {
        if(member.role === "teacher") {
            this.teachers.push(member);
        } 
        this.students.push(member);
    }

    removeMember(member) {
        if(member.role === "teacher") {
            this.teachers = this.teachers.filter(el => el !== member)
        } 
        this.students = this.students.filter(el => el !== member)
    }

    startLesson() {
        this.teachers.forEach(teacher => {
            teacher.energy -= 2;
        });
        this.students.forEach(student => {
            student.energy -= 5;
        });
    }
}

class UniversityMember extends University {
    constructor(name, age, role, energy) {
        super();
        this.name = name;
        this.age = age;
        this.role = role;
        this.energy = energy;
    }

    info(){
        const {name, age, role, energy} = this;
        return {
           name,
           age,
           role,
           energy, 
        };
    }
}

class Teacher extends UniversityMember {
    constructor(name, age, role, energy = 24) {
        super(name, age, role, energy);
    }
}

class Student extends UniversityMember {
    constructor(name, age, role, energy = 24) {
        super(name, age, role, energy);
    }
}