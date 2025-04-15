function Gamer(name) {
    this.name = name;
    this.score = 0;
    this.incrementScore = function () {
        this.score++;
    };
}

function Character(name) {
    this.name = name;
    this.collectedItemsArr = [];

    this.addItem = function (item) {
        this.collectedItemsArr.push(item);
        console.log(`${this.name} now has ${this.collectedItemsArr.join(', ')}`);
    };
}

const mahdi = new Character('Mahdi');
mahdi.addItem('Wand');
mahdi.addItem('Map');
mahdi.addItem('Potion');

const dave = new Gamer('Dave');
const sarah = new Gamer('Sarah');
const kerry = new Gamer('Kerry');
dave.incrementScore();
sarah.incrementScore();
sarah.incrementScore();
kerry.incrementScore();
kerry.incrementScore();
kerry.incrementScore();
console.log(dave);
console.log(sarah);
console.log(kerry);
