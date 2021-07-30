class Snake {
    x;
    y;
    width;
    height;

    constructor(x, y, width, height) {
        this.y = y;
        this.width = width;
        this.height = height;
        this.x = x;
    }

    drawSnake(ctx) {
        ctx.strokestyle = 'white';
        ctx.fillStyle = 'pink';
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fillRect(this.x, this.y, this.width, this.height);

    }

}