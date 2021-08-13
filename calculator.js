let runningTotal = 0;
let buffer = '0';
let previousOperation = null;
let screen = document.querySelector('.screen');

document.querySelector('.calc-buttons').addEventListener('click', function(event) {
    buttonClick(event.target.innerText);
})

function buttonClick(value) {
    if(isNaN(parseInt(value))){
        console.log('1');
        hadleSign(value);
    } else {
        handleNum(value);
    }
    render();
}

function handleNum(value) {
    if (buffer === "0") {
        buffer = "" + value;
    } else {
        buffer += value;
    }
}

function hadleSign(value) {
    switch(value) {
        case 'C':
            runningTotal = 0;
            buffer = "0";
            return;
        case '←': 
            if (buffer.length !== 1){
                buffer = buffer.substring(0, buffer.length-1);
                return;
            } else {
                buffer = "0";
                return;
            }
        case '=':
            if (previousOperation === null) {
                return;
            }
            haddleOpperation();
            previousOperation = null;
            buffer = "" + runningTotal;
            runningTotal = 0;
            return;
        default:
            console.log('2');
            previousOperation = value;
            handleMath();
            return;
    }
}

function handleMath() {
    console.log('3');

    if (runningTotal === 0){
        console.log('4');
        runningTotal = parseInt(buffer);
        buffer = "0";
    } else {
        intBuffer = parseInt(buffer);
        haddleOpperation(intBuffer);
    }
}

function haddleOpperation(intBuffer) {
    switch(previousOperation) {
        case '+':
            runningTotal += intBuffer;
            console.log(runningTotal);
            return; 
        case '-':
            runningTotal -= intBuffer;
            return;
        case 'X':
            runningTotal *= intBuffer;
            return;  
        case '÷':
            runningTotal /= intBuffer;
            return; 
    } 
}

function render() {
    screen.innerText = buffer;
}