class Shiritory {
    constructor() {
        this.words = [];
        this.game_over = false;
    }

    play(word) {
        const lastWord = this.words[this.words.length - 1];
        const currentWord = word.toLowerCase();
        if (this.words.length === 0) {
            this.words.push(currentWord);
            //console.log(this.words);
            return;
        } 
        if (!(this.words.find(element=> element === currentWord )) && (lastWord[lastWord.length - 1] === currentWord[0]) && !this.game_over) {
            this.words.push(currentWord);
            //console.log(this.words);
            return this.words;
        }

        this.game_over = true;
        console.log("game over");
        return "game over";
    }

    restart() {
        this.words.length = 0;
        this.game_over = false;
    }
}

const myShiritori = new Shiritory();
myShiritori.play("apple"); // ["apple"]
myShiritori.play("ear"); // ["apple", "ear"]
myShiritori.play("rhino"); // ["apple", "ear", "rhino"]
myShiritori.play("jack");
myShiritori.play("orange");
console.log(myShiritori.words);

myShiritori.restart(); // "game restarted"
console.log(myShiritori.words) // []


myShiritori.play("hostess"); // ["hostess"]
myShiritori.play("stash"); // ["hostess", "stash"]
myShiritori.play("hostess"); // "game over"