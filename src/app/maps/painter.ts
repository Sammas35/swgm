import {Room} from "../domain/room";

export class Painter {
    scale: number = 20;
    private y: number;
    private x: number;
    private dir: { x: number; y: number };

    constructor(private ctx: CanvasRenderingContext2D) {
    }

    public paintRoom(room: Room) {
        this.x = room.start.x * this.scale;
        this.y = room.start.y * this.scale;
        this.dir = {x: 1, y: 0};

        this.ctx.moveTo(this.x, this.y);

        room.path.split(',')
            .forEach((step) => {
                if (step.startsWith('t')) {
                    this.paintDoor(step);
                } else {
                    if (step.startsWith('i')) {
                        step = step.substr(1);
                        this.rotateInner(this.dir);
                    }
                    this.lineTo(step);
                }
            });

        this.ctx.stroke();
    }

    private rotateInner(dir) {
        if (dir.x === 1 && dir.y === 0) {
            dir.x = 0;
            dir.y = 1;
        } else if (dir.x === 0 && dir.y === 1) {
            dir.x = -1;
            dir.y = 0;
        } else if (dir.x === -1 && dir.y === 0) {
            dir.x = 0;
            dir.y = -1;
        } else if (dir.x === 0 && dir.y === -1) {
            dir.x = -1;
            dir.y = 0;
        }
        return dir;
    }

    private paintDoor(step: string) {
        let doorKind;

        console.log('paintDoor', step);

        // width is one unit
        step = step.substr(1);
        doorKind = step[0];
        step = step.substr(1);

        // first straight with 0.2 length
        this.lineTo(step, 0.2);

        console.log("doorKind", doorKind);
        // the door itself
        switch (doorKind) {
            case '1': // to left
                this.paintDoorToLeft(step);
                break;
            case '2': // to right
                this.paintDoorToRight(step);
                break;
            case '3': // from left
                this.paintDoorFromLeft(step);
                break;
            case '4': // from right
                this.paintDoorFromRight(step);
                break;
            case '5': // open
                break;
            case '6': // secret
                this.paintDoorSecret(step);
                break;
            case '7': // secretDotted
                this.paintDoorSecretDotted(step);
                break;
        }

        // move to end of door
        this.moveTo(step, 0.6);

        // paint end with 0.2 length
        this.lineTo(step, 0.2);
    }

    private lineTo(step: string, scale?: number) {
        scale = scale || 1;
        this.stepToPosition(step, scale);
        this.ctx.lineTo(this.x, this.y);
    }

    private moveTo(step: string, scale?: number) {
        scale = scale || 1;
        this.stepToPosition(step, scale);
        this.ctx.moveTo(this.x, this.y);
    }

    private stepToPosition(step: string, scale: number) {
        this.x += this.dir.x * +step * this.scale * scale;
        this.y += this.dir.y * +step * this.scale * scale;
    }

    private paintDoorToLeft(step: string) {
        let x;
        let y;
        if (this.dir.x === 0) {
            x = this.x + this.scale * -0.3;
            y = this.y + this.dir.y * +step * this.scale * 0.6;
            console.log('paintDoorToLeft', this.x, this.y, x, y);
            this.ctx.lineTo(x, y);
        } else {
            x = this.x + this.dir.x * +step * this.scale * 0.6;
            y = this.y + this.scale * -0.3;
            console.log('paintDoorToLeft', this.x, this.y, x, y);
            this.ctx.lineTo(x, y);
        }
    }

    private paintDoorToRight(step: string) {
        let x;
        let y;

        if (this.dir.x === 0) {
            x = this.x + this.scale * 0.3;
            y = this.y + this.dir.y * +step * this.scale * 0.6;
            this.ctx.lineTo(x, y);
        } else {
            x = this.x + this.dir.x * +step * this.scale * 0.6;
            y = this.y + this.scale * 0.3;
            this.ctx.lineTo(x, y);
        }
    }

    private paintDoorFromLeft(step: string) {
        let x;
        let y;

        x = this.x + this.dir.x * +step * this.scale * 0.6;
        y = this.y + this.dir.y * +step * this.scale * 0.6;
        this.ctx.moveTo(x, y);

        if (this.dir.x === 0) {
            x = this.x + this.scale * -0.3;
            this.ctx.lineTo(x, this.y);
        } else {
            y = this.y + this.scale * -0.3;
            this.ctx.lineTo(this.x, y);
        }
    }

    private paintDoorFromRight(step: string) {
        let x;
        let y;

        x = this.x + this.dir.x * +step * this.scale * 0.6;
        y = this.y + this.dir.y * +step * this.scale * 0.6;
        this.ctx.moveTo(x, y);

        if (this.dir.x === 0) {
            x = this.x + this.scale * 0.3;
            this.ctx.lineTo(x, this.y);
        } else {
            y = this.y + this.scale * 0.3;
            this.ctx.lineTo(this.x, y);
        }
    }

    private paintDoorSecret(step: string) {
        let height = this.scale * 0.2;
        let width = +step * this.scale * 0.3;

        this.ctx.lineTo(this.x + this.dir.x * +step * this.scale * 0.6,
            this.y + this.dir.y * +step * this.scale * 0.6);

        if (this.isDirToRigth()) {
            this.ctx.moveTo(this.x, this.y);
            this.ctx.bezierCurveTo(
                this.x, this.y + height,
                this.x + width, this.y + height,
                this.x + width, this.y);
            this.ctx.moveTo(this.x + width, this.y);
            this.ctx.bezierCurveTo(this.x + width, this.y - height,
                this.x + 2 * width, this.y - height,
                this.x + 2 * width, this.y);
        } else if (this.isDirToDown()) {
            this.ctx.moveTo(this.x, this.y);
            this.ctx.bezierCurveTo(
                this.x + height, this.y,
                this.x + height, this.y + width,
                this.x, this.y + width);
            this.ctx.moveTo(this.x, this.y + width);
            this.ctx.bezierCurveTo(this.x - height, this.y + width,
                this.x - height, this.y + 2 * width,
                this.x, this.y + 2 * width);
        } else if (this.isDirToLeft()) {
            this.ctx.moveTo(this.x, this.y);
            this.ctx.bezierCurveTo(
                this.x, this.y - height,
                this.x - width, this.y - height,
                this.x - width, this.y);
            this.ctx.moveTo(this.x - width, this.y);
            this.ctx.bezierCurveTo(this.x - width, this.y + height,
                this.x - 2 * width, this.y + height,
                this.x - 2 * width, this.y);
        } else if (this.isDirToUp()) {
            this.ctx.moveTo(this.x, this.y);
            this.ctx.bezierCurveTo(
                this.x - height, this.y,
                this.x - height, this.y - width,
                this.x, this.y - width);
            this.ctx.moveTo(this.x, this.y - width);
            this.ctx.bezierCurveTo(this.x + height, this.y - width,
                this.x + height, this.y - 2 * width,
                this.x, this.y - 2 * width);
        }
    }
    private paintDoorSecretDotted(step: string) {
        let x;
        let y;

        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.setLineDash([0.1*this.scale]);

        this.ctx.moveTo(this.x, this.y);
        x = this.x + this.dir.x * +step * this.scale * 0.6;
        y = this.y + this.dir.y * +step * this.scale * 0.6;
        this.ctx.lineTo(x, y);

        this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.beginPath();
    }
    private isDirToRigth() {
            return this.dir.x > 0;
        }
    private isDirToDown() {
        return this.dir.y > 0;
    }

    private isDirToLeft() {
        return this.dir.x < 0;
    }

    private isDirToUp() {
        return this.dir.y < 0;
    }
}