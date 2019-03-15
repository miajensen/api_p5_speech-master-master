let myRec, browserCompatible, pen, direction, displayWord;

var hej = 0;

function setup() {
    cnv = createCanvas(400, 400);
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
        bounce: function () {
            this.x = this.x < 0 ? 0 : this.x > width ? width : this.x
            width: this.x
        }
    }
    console.log("Pen findes, og dens x værdi er: " + pen.x);
}

function draw() {
    background('blue');
    if (direction == "left") pen.x--;
    if (direction == "right") pen.x++;
    if (direction == "up") pen.y--;
    if (direction == "down") pen.y++;
    if (pen.y < 0) {
        pen.y = 0
    }
    if (pen.y > 400) {
        pen.y = 400
    }
    pen.bounce();
    pen.show();
    if (direction == "kasper") {
        pen.size = pen.size + 1;
    }
    if (direction == "hej" || hej > 1) {
        fill(255);
        textSize(25);
        text(':' + minute(), 35, 50);
        text(hour(), 5, 50);
        hej = hej + 1;
        if (hour() == 9 && minute() > 15 && minute() < 25) {
            textSize(30);
            text('FRIKVARTER', 200, 200);
        }
        if (hour() == 10 && minute() > 25 && minute() < 35) {
            textSize(40);
            text('FRIKVARTER', 200, 200);
        }
        if (hour() == 10 && minute() > 35 && hour() < 13 && minute() < 5) {
            textSize(40);
            text('FRIKVARTER', 200, 200);
        }
        if (hour() == 13 && minute() > 5 && minute() < 15) {
            textSize(40);
            text('FRIKVARTER', 200, 200);
        }
        if (hour() == 14 && minute() > 15 && minute() < 20) {
            textSize(40);
            text('FRIKVARTER', 200, 200);
        }
    }
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
            case 'kasper':
                direction = "kasper"
                break;
            case 'hej':
                direction = "hej"
                break;
            default:
                direction = "stop"

        }
    }
}