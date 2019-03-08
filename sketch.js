let words = [];
let sentence = "";
let resultP;
let leftDiv;
let counter;
let cnv, myRec, btn, txt;
let img, img_2, img_3, img_4, img_5;

function setup() {
    //Jeg sætter en kommentar her 
    img = loadImage('image/kakao.jpg');
    img_2 = loadImage('image/skumfiduser.jpg');
    img_3 = loadImage('image/is.jpg');
    img_4 = loadImage('image/vinter.jpg');
    img_5 = loadImage('image/film.jpg');

    let SpeechRecognition = window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition ||
        window.oSpeechRecognition ||
        window.SpeechRecognition;

    cnv = createCanvas(400, 600);
    background('red');
    txt = createElement("h5", "Say something..")
        .position(40, 200)
        .style("color:white;")
        .hide();

    resultP = createP("")
        .position(40, 220)
        .parent(txt);
    //Check browser comp
    if (SpeechRecognition !== undefined) {
        btn = createButton("Klik for at aktivere mikrofon")
            .position(40, 200)
            .style("font-size:1em;background-color:#33C3F0;border-color:#33C3F0;border-radius:8px;color:white;cursor:pointer;")
            .mousePressed(function () {
                btn.hide();
                txt.show();
                myRec = new p5.SpeechRec();
                myRec.continuous = true;
                myRec.interimResults = true;
                myRec.onResult = showResult;
                myRec.start();
            });
    }
}

function draw() {
}

function showResult() {
    if (myRec.resultValue == true) {
        sentence = myRec.resultString.split(' ').pop();
        resultP.html(sentence);

        if (sentence.includes("kakao")) {
            image(img, 0, height / 2, img.width / 9, img.height / 8);
        }
        if (sentence.includes("skumfiduser")) {
            image(img_2, 0, height / 2, img.width / 9, img.height / 8);
        }
        if (sentence.includes("is")) {
            image(img_3, 0, height / 2, img.width / 9, img.height / 8);
        }
        if (sentence.includes("vinter")) {
            image(img_4, 0, height / 2, img.width / 9, img.height / 8);
        }
        if (sentence.includes("film")) {
            image(img_5, 0, height / 2, img.width / 9, img.height / 8);
        }

    }
}