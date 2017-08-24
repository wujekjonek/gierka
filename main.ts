var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


console.log("aaaaaaaaaaaaaa");
let i = 380;



let punkt001 = new Punkt(100, 100, "a");
punkt001.rysujpunkt();


//  setInterval(esetujCanvas, 1000);
// function esetujCanvas() {
//     ctx.clearRect(0, 0, 400, 300);
// }



window.addEventListener("keydown", moveSomething, false);

function moveSomething(e) {
    switch(e.keyCode) {
        case 37:
            console.log("37");
            break;
        case 38:
            console.log("38");
            break;
        case 39:
            console.log("39");
            break;
        case 40:
            console.log("40");
            break;
        case 32:
            console.log("32");
            break;
    }
}

//
// if (myGameArea.key && myGameArea.key == 37) {
//     bohater.speedX = -1;
// }
// if (myGameArea.key && myGameArea.key == 39) {
//     bohater.speedX = 1;
// }
// if (myGameArea.key && myGameArea.key == 38) {
//     bohater.speedY = -1;
// }
// if (myGameArea.key && myGameArea.key == 40) {
//     bohater.speedY = 1;
// }
//
// if (myGameArea.key && myGameArea.key == 32) {
//
//
// }






// setInterval(rysuj, 50);

function rysuj() {
    ctx.clearRect(0, 0, 400, 300);
    let punkt001 = new Punkt(i, 100, i);
    punkt001.rysujpunkt();
    i = i - 1;

    // if(i == 250){
    //     clearInterval(1)
    //
    // }

}





