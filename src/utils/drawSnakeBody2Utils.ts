export function drawBodyPart2(
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
        context.fillStyle = "#9896f1";
    } else {
        context.fillStyle = "#d59bf6";
    }

    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "#8ef6e4";
    context.stroke();

    context.restore();
    };