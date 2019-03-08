//Make a small drawing program with p5 speech 
//reference: http://ability.nyu.edu/p5.js-speech/
//Cloned fra

let myRec, browserCompatible, pen, direction, displayWord;


function setup() {
    cnv = createCanvas(400, 400);
    background('red');
    //Check browser compatibility
    browserCompatible = window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition ||
        window.oSpeechRecognition ||
        window.SpeechRecognition;
    //If compatible browser - instantiate 
    if (browserCompatible !== undefined) {
        myRec = new p5.SpeechRec();
        myRec.continuous = true;
        myRec.interimResults = true;
        myRec.onResult = showResult;
        myRec.start();
    }
    displayWord = createDiv();
    pen = {
        x: width / 2,
        y: height / 2,
        size: 6,
        col: color(255, 255, 255, 150),
        show: function () {
            fill(this.col)
            ellipseMode(CENTER)
            ellipse(this.x, this.y, this.size, this.size)
        },
        bounce: function(){
            this.x = this.x < 0 ? 0 : this.x > width ? width : this.x;
        }
    }
    console.log("Pen findes, og dens x værdi er: " + pen.x);
}

function draw() {
    if (direction == "left") pen.x--;
    if (direction == "right") pen.x++;
    if (direction == "up") pen.y--;
    if (direction == "down") pen.y++;
    pen.bounce();
    pen.show();
}

function showResult() {
    if (myRec.resultValue == true) {
        word = myRec.resultString.split(' ').pop();
        displayWord.html(word.toLowerCase());
        switch (word) {
            case 'left':
                direction = "left"
                break;
            case 'right':
                direction = "right"
                break;
            case 'up':
                direction = "up"
                break;
            case 'down':
                direction = "down"
                break;
            default:
                direction = "stop"
        }
    }
}

/*
OPGAVER 
Vi skal forsøge at lave et lille tegneprogram, som bruger stemmegenkendelse til at føre pennen rundt på skærmen. 
Det første vi gør er at lave et objekt, pen, med Javascript Object notation. Objektet skal have følgende properties og metoder:
x, y, size, col
show() - metode som laver fill(this.col), og viser en ellipse(this.x, this.y, this.size, this.size)
Se hvordan her: https://www.w3schools.com/jS/js_objects.asp
Objektet skal laves i setup() - og metoden pen.show() skal kaldes i draw() 
Nu skal vi så bruge variablen word til at flytte rundt på objektet. Til det skal vi bruge et såkaldt switch statement i draw. 
Læs dokumentationen her - og se om du kan sørge for at ordene 'left', 'right', 'up', 'down' flytter vores pen rundt
https://www.w3schools.com/js/js_switch.asp
Se så om du kan tilføje endnu en metode i objektet - bounce - som sørger for at pennen ikke kommer længere, 
når x er mindre end nul eller større end bredden. Og tilsvarende for y.
Bemærk at der findes en smart måde at skrive comditions på, således:
a = a < 0 ? 0 : a;
Som betyder - sæt a til (er a mindre end nul?) 0, ellers a
_ _ _ _ _ _ _ _
Se om du kan lave programmet så man kan skifte farver - ved for eksempel at sige green, red, blue
Se om du kan lave programmet så man kan skifte størrelse ved at sige bigger, smaller
*/