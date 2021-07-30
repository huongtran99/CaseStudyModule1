class Quarry {
    x;
    y;
    width;
    height;
    image;

    constructor() {
        this.x = Math.floor(Math.random() * game.clientWidth / 20) * 20;
        this.y = Math.floor(Math.random() * game.clientHeight / 20) * 20;
        this.width = 10;
        this.height = 10;
        this.image = "head.png";
    }

    imgSnake(ctx) {
        let image = new Image();
        let xPosition = this.x;
        let yPosition = this.y;
        ctx.drawImage(image, xPosition, yPosition);
        image.src = './imgs/' + this.image;
    }

    drawQuarry(ctx) {
        ctx.fillStyle = cr;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fill();
    }

}