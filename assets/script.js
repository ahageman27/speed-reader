var mainEl = document.getElementById('main');
var i = 2000;

var text = 'Death is nothing at all. It does not count. I have only slipped away into the next room. Nothing has happened.';

var words = text.split(' ');
var msgInterval;
var i = 500;
var wordNum = 0;
function printWord() {
    if (words[wordNum] === undefined) {
        wordNum = 0;
        i -= 100;
    } else {
        console.log('here')
        mainEl.textContent = words[wordNum];
        wordNum++;
    }
}

function repeat() {
    printWord()
    if (i > 100) {
        msgInterval = setTimeout(repeat, i);
    }
}

repeat()