class Musician{
    constructor(name){
        this.name = name;
    }
    play(piece){
        console.log(`${this.name} is now playing ${piece}`);
    }
}

const violinist = new Musician("Asaad");
const pianist = new Musician("Thien");

violinist.play("Beethoven's piece");
pianist.play("Romantic");