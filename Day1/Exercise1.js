class Musician{
    constructor(name){
        this.name = name;
    }
    play(piece){
        console.log(`${this.name} is now playing ${piece}`);
    }
}

const violinist = new Musician("Asaad");
const pianist = new Musician("Clara Schumann");

violinist.play("Beethoven's piece");
pianist.play("Mozart's sonate");