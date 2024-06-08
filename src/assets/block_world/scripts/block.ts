

export default class Block {
    x: number;
    y: number;
    width: number;
    height: number;
    readonly sprite: HTMLImageElement;

    constructor(x: number, y: number, width: number, height: number, sprite: HTMLImageElement) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.sprite = sprite;
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
}