class Jungle {
    tigers = [];
    monkeys = [];
    snakes = [];
}

class Animal extends Jungle{
    constructor(energy) {
        super();
        this.energy = energy;
    }

    sound() {
        if(this.energy >= 3) {
            this.energy -= 3;
            return "Sound";
        }

        return "I'm too tired";
    }

    eatFood(food) {
        this.energy += 5;
        return `${food.name} is eaten`;
    }

    sleep() {
        this.energy += 10;
        return "Slept";
    }
}

class Monkey extends Animal{
    constructor(name, energy) {
        super(energy);
        this.monkeys.push(name);
        this.name = name;
    }

    eatFood() {
       this.energy += 2;
       return "Eaten";
    }

    sound() {
        if(this.energy >= 4) {
            this.energy -= 4;
            return "sound";
        }
        return "I'm too tired";
    }

    plat() {
        if(this.energy >= 8) {
            this.energy -= 8;
            return "Oooo Oooo";
        }
        return "I'm too tired";
    }
}

class Snake extends Animal{
    constructor(name, energy) {
        super(energy);
        this.snakes.push(name);
        this.name = name;
    }
}

class Tiger extends Animal{
    constructor(name, energy) {
        super(energy);
        this.tigers.push(name);
        this.name = name;
    }

    eatFood(food) {
        if(food.name !== "grain") {
            this.energy += 5;
            return `${food.name} is eaten`;
        }

        return "I can’t eat that";
    }

    sleep() {
        this.energy += 5;
        return "slept";
    }
}

class Food {
    
}

class Fish extends Food{
    name = "fish";
}

class Grain extends Food{
    name = "grain";
}

class Meat extends Food{
    name = "meat";
}