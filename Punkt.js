var Punkt = (function () {
    // KONSTRUKTOR
    function Punkt(x, y) {
        this.x = x;
        this.y = y;
        //     this.opis = opis;
        // if(opis) {
        //     this.opis = opis;
        // }
        // else{
        //     this.opis = x.toString();
        // }
    }
    // METODY
    Punkt.prototype.rysujpunkt = function () {
        ctx.beginPath();
        ctx.arc(((this.x)), ((this.y)), 4, 0, 10);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.font = "10px Arial";
        ctx.fillStyle = "black";
        // ctx.fillText(this.opis, ((this.x + 20)), ((this.y + 20)));
        ctx.fillText(x.toString() + "; " + y.toString(), ((this.x + 20)), ((this.y + 20)));
        // console.log("oto");
        // console.log("wspolrzedne" + " " + this.x + " " + this.y + " punktu: " + this.opis);
    };
    return Punkt;
}());
