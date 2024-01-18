export function drawBodyPart(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    isEven: boolean
    ) {
    context.save();
    context.translate(x, y);
    context.beginPath();
    context.arc(0, 0, 4.5, 0, 2 * Math.PI, false);

    if (isEven) {
        context.fillStyle = "#a3d001";
    } else {
        context.fillStyle = "#0d9123";
    }

    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "#000";
    context.stroke();

    context.restore();
    };