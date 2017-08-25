var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// let i = 380;
// let punkt001 = new Punkt(100, 100, "a");
// punkt001.rysujpunkt();
//  setInterval(esetujCanvas, 1000);
// function esetujCanvas() {
//     ctx.clearRect(0, 0, 400, 300);
// }
var x = 200;
var y = 280;
function czyszczenie() {
    ctx.clearRect(0, 0, 400, 300);
}
var punkt001 = new Punkt(x, y, "a");
punkt001.rysujpunkt();
window.addEventListener("keydown", moveSomething, false);
function moveSomething(e) {
    switch (e.keyCode) {
        case 37:
            console.log("37 - lewo");
            czyszczenie();
            this.x = x - 3;
            this.punkt001 = new Punkt(x, y, "a");
            this.punkt001.rysujpunkt();
            break;
        case 38:
            console.log("38");
            czyszczenie();
            this.y = y - 1;
            this.punkt001 = new Punkt(x, y);
            this.punkt001.rysujpunkt();
            break;
        case 39:
            console.log("39 - prawo");
            czyszczenie();
            this.x = x + 3;
            this.punkt001 = new Punkt(x, y);
            this.punkt001.rysujpunkt();
            break;
        case 40:
            console.log("40");
            czyszczenie();
            this.y = y + 1;
            this.punkt001 = new Punkt(x, y);
            this.punkt001.rysujpunkt();
            break;
        case 32:
            console.log("32");
            // ctx.clearRect(0, 0, 400, 300);
            czyszczenie();
            this.y = y - 15;
            this.punkt001 = new Punkt(x, y);
            this.punkt001.rysujpunkt();
            break;
        case 90:
            console.log("z");
            //      this.y = y - 15;
            // for (var i = x; i < x + 50; i++) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, 20);
            ctx.strokeStyle = "green";
            ctx.stroke();
            // }
            //     setTimeout(ctx.clearRect(0, 0, 400, 300), 3000);
            // czyszczenie();
            this.punkt001 = new Punkt(x, y);
            setTimeout(czyszczenie(), 1000);
            this.punkt001.rysujpunkt();
            break;
    }
}
test();
function test() {
    for (var i = 1; i < 10; i = i + 1) {
        //  setTimeout(czyszczenie(), 500);
        setTimeout(console.log("funkcja testowa!"), 90000);
        this.a = x;
        this.b = y - (i * 20);
        ctx.beginPath();
        ctx.arc(((this.a)), ((this.b)), 2, 0, 10);
        ctx.fillStyle = "green";
        ctx.fill();
    }
    // setInterval(rysuj, 50);
    function rysuj() {
        ctx.clearRect(0, 0, 400, 300);
        var punkt001 = new Punkt(i, 100, i);
        punkt001.rysujpunkt();
        i = i - 1;
        // if(i == 250){
        //     clearInterval(1)
        //
        // }
    }
}
