export function drawBodyPart(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    snakeNumberChoice:number,
    isEven: boolean
    ) {
    context.save();
    context.translate(x, y);
    context.beginPath();
    context.arc(0, 0, 4.5, 0, 2 * Math.PI, false);

    if (isEven) {
        if (snakeNumberChoice === 1) {
        context.fillStyle = "#f70776";
        } else if (snakeNumberChoice === 2) {
        context.fillStyle = "#8ef6e4";
        } else if (snakeNumberChoice === 3) {
        context.fillStyle = "#dde0ab";
        } else {
        context.fillStyle = "#8dc6ff";
        } 
    } else {
        if (snakeNumberChoice === 1) {
        context.fillStyle = "#66bfbf";
        } else if (snakeNumberChoice === 2) {
        context.fillStyle = "#fdb44b";
        } else if (snakeNumberChoice === 3) {
        context.fillStyle = "#e46161";
        } else {
        context.fillStyle = "#5dacbd";
        } 
    }

    context.fill();
    context.lineWidth = 1;
    if (snakeNumberChoice === 1) {
        context.strokeStyle = "#000";
      } else if (snakeNumberChoice === 2) {
        context.strokeStyle = "#8ef6e4";
      } else if (snakeNumberChoice === 3) {
        context.strokeStyle = "#e46161";
      } else {
        context.strokeStyle = "#cbf078";
      } 
    context.stroke();

    context.restore();
    };