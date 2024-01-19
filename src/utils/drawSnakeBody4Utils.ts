export function drawBodyPart4(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    isEven: boolean
    ) {
    context.save();
    context.translate(x, y);
    context.beginPath();
    context.arc(0, 0, 9, 0, 2 * Math.PI, false);

    if (isEven) {
        context.fillStyle = "#f1b963";
    } else {
        context.fillStyle = "#cbf078";
    }

    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "#cbf078";
    context.stroke();

    context.restore();
    };