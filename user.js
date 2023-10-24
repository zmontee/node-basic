function User(name, age) {
    this.name = name;
    this.age = age;
    this.displayInfo = () => {
        console.log(`Імя: ${this.name} Вік: ${this.age}`);
    }
}
User.prototype.sayHi = function() {
    console.log(`Привіт, мене звуть ${this.name}`);
}

module.exports = User;