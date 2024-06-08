import Block_sprite from '../svg/Block.svg?url'
import Block from './block'

export class BlockWorld {
    readonly _canvas: HTMLCanvasElement;
    readonly _ctx: CanvasRenderingContext2D;
    readonly blockSprite: HTMLImageElement
    blockList: Array<Block> = []

    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        this._ctx = this._canvas.getContext('2d')!;

        // Fix the problem of blurry draws on canvas
        let dpi = window.devicePixelRatio;
        let style_height = +getComputedStyle(this._canvas).getPropertyValue("height").slice(0, -2);
        let style_width = +getComputedStyle(this._canvas).getPropertyValue("width").slice(0, -2);
        // @ts-ignore
        this._canvas.setAttribute('height', style_height * dpi);
        // @ts-ignore
        this._canvas.setAttribute('width', style_width * dpi);

        this.blockSprite = new Image()
        this.blockSprite.src = Block_sprite

        this._setWorld();
    }

    get ctx () {
        return this._ctx
    }
    get canvas () {
        return this._canvas
    }

    _setWorld() {
        const block_width = this.canvas.offsetWidth / 20; // Blocks will have 1 / 20 window size by design
        const block_height = block_width / 100 * 116; // 100:116 ratio of the blocks sprite

        const worldGrid = this.getWorldGrid(block_width, block_height) // Array of all possible block possitions

        const world = this.generateWorld(worldGrid)

        for (let index = 0; index < worldGrid.length; index++) {
            const pos = worldGrid[index];
            this.blockList.push(new Block(pos[0], pos[1], block_width, block_height, this.blockSprite));
        }

        this.blockSprite.onload = () => {
            console.log(this.blockList)
            for (let i = this.blockList.length - 1; i > 0; i--) {
                const block = this.blockList[i]
                block.render(this.ctx)
            }
        }
    }

    getWorldGrid (block_width: number, block_height: number): number[][] {
        let matrix: number[][] = [];

        let x_border_offset = -block_width / 4;
        let y_top_half_height = (block_width * Math.tan(30 * Math.PI / 180) / 2);

        let x = -block_width / 2;
        let y = this.canvas.offsetHeight - y_top_half_height;
    
        while (y > 0 - block_height) {
            while (x < this.canvas.offsetWidth) {
                matrix.push([x, y]);
                x += block_width;
            }
            x = -block_width / 4 - x_border_offset;
            x_border_offset *= -1;

            y -= y_top_half_height;
        }
        console.log(matrix);

        return matrix;
    }

    generateWorld (worldGrid: number[][]) {
        // TODO
    }

    drawDot(x: number, y: number) {
        this.ctx.fillRect(x, y, 5, 5);
    }
}