var arr = new Array();
var level = 0;


// input level
while(level < 2 || level > 10){
    level = prompt("level(2-10):", "2");
}

//init array
for (let i = 0; i <= level+1; i++) {
    let temp = new Array()
    for (let j = 0; j <= level+1; j++) {
        temp.push(false);
    }
    arr.push(temp);
}

//create dots
let dotSize = 100 / level;
let screen = document.getElementById("game");
for (let i = 1; i <= level; i++) {
    for (let j = 1; j <= level; j++) {
        let dot = document.createElement("div");
        dot.setAttribute("id", "dot_" + i + "_" + j);
        dot.setAttribute("onclick", "changeValue(" + i + ", " + j + ")")
        dot.setAttribute("class", "dot");
        dot.style.width = dotSize + "%";
        dot.style.height = dotSize + "%";
        screen.appendChild(dot);
    }
}

//change dot value when click
function changeValue(i, j) {
    arr[i - 1][j - 1] = !arr[i - 1][j - 1];
    arr[i - 1][j] = !arr[i - 1][j];
    arr[i - 1][j + 1] = !arr[i - 1][j + 1];

    arr[i][j - 1] = !arr[i][j - 1];
    arr[i][j + 1] = !arr[i][j + 1];

    arr[i + 1][j - 1] = !arr[i+1][j - 1];
    arr[i + 1][j] = !arr[i+1][j];
    arr[i + 1][j + 1] = !arr[i+1][j + 1];
    changeColor();
    console.log(arr[i, j]);
    // console.log(i,j);
}

//reload colors
function changeColor() {
    for (let i = 1; i <= level; i++) {
        for (let j = 1; j <= level; j++) {
            let thisDot = document.getElementById("dot_" + i + "_" + j);
            if (arr[i][j] == true) {
                thisDot.style.backgroundColor = "red";
            } else {
                thisDot.style.backgroundColor = "black";
            }
        }
    }
    setTimeout(function(){
        checkWin();
    },50);
    
}

function checkWin(){
    let isWin = true;
    for (let i = 1; i <= level; i++) {
        for (let j = 1; j <= level; j++) {
            if (arr[i][j] == false) {
                isWin = false;
            }
        }
    }
    if(isWin == true){
        alert("you win!!!!!!!!!!!!!!!!");
        for (let i = 1; i <= level; i++) {
            for (let j = 1; j <= level; j++) {
                arr[i][j] = false;
            }
        }
        changeColor();
    }
}