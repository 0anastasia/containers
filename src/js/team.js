class Character {
    constructor(name) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('в имени должно быть от 2 до 10 символов');
        }
        this.name = name;
        this.level = 1;
        this.health = 100;
    }
}
console.log(Character);

export default class Team {
    constructor(name) {
      this.name = name;
      this.members = new Set();
    }

    add(member) {
        if (this.members.has(member)) {
            throw new Error ('такой персонаж уже есть');
        }
        this.members.add(member)
    }

    addAll(...rest) {
        rest.forEach((member) => this.members.add(member))
    }

    toArray() {
        return Array.from(this.members);
    }
}
