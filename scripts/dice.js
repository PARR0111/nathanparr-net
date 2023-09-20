let check = 0; 
let record = "";
let h = "Hello";
let g = "Goodbye";
let life = 20;
let title = " Life";
let dice = null;

refreshDisplay();

function testingTheWater() {
    
    let x = document.getElementById("text1");
    let y = document.getElementById("text2");
    if (check === 0) {
        x.innerHTML = h;
        check += 1;
        record += h;
    } else if (check === 1) {
        x.innerHTML = g;
        check -= 1;
        record += g;
    }
    //y.innerHTML = record;

}

//name = prompt("Hello There");

//document.getElementById("text2").innerHTML = name;


function refreshDisplay() {
    document.getElementById("life").innerHTML = life;
    document.getElementById("title1").innerHTML = life + title;
}


function resetLife() {
    diceCheck();
    life = dice;
    refreshDisplay();
}

function displayLifePlus() {
    life += 1;
    refreshDisplay();
}

function displayLifeMinus() { 
    life -= 1;
    refreshDisplay();
}

function displayLifePlus10() {
    life += 10;
    refreshDisplay();
}

function displayLifeMinus10() { 
    life -= 10;
    refreshDisplay();
}

function diceCheck() {

    var ele = document.getElementsByName("dice_type");

    for ( i = 0; i < ele.length; i++ ){
        if (ele[i].checked) {
            dice = Number(ele[i].value);
        }
    }
}

function displayRndNum(){
    diceCheck(); 
    
    let roll = getRndInteger(1, dice);
    life = roll;
    refreshDisplay();
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }



