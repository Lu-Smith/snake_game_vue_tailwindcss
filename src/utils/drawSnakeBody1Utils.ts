export function drawBodyPart1(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    snakeNumberChoice: number,
    isEven: boolean
    ) {
    context.save();
    context.translate(x, y);
    context.beginPath();
    context.arc(0, 0, 9, 0, 2 * Math.PI, false);

    if (isEven) {
        if (snakeNumberChoice === 1) {
            context.fillStyle = "#c1e205";
          } else if (snakeNumberChoice === 2) {
            context.fillStyle = "#8ef6e4";
          } else if (snakeNumberChoice === 3) {
            context.fillStyle = "#f1b96";
          } else {
            context.fillStyle = "#cbf078";
          } 
    } else {
        if (snakeNumberChoice === 1) {
            context.fillStyle = "#c1e205";
          } else if (snakeNumberChoice === 2) {
            context.fillStyle = "#8ef6e4";
          } else if (snakeNumberChoice === 3) {
            context.fillStyle = "#f1b96";
          } else {
            context.fillStyle = "#cbf078";
          } 
    }

    context.fill();
    context.lineWidth = 1;
    if (snakeNumberChoice === 1) {
        context.strokeStyle = "#000";
      } else if (snakeNumberChoice === 2) {
        context.strokeStyle = "#000";
      } else if (snakeNumberChoice === 3) {
        context.strokeStyle = "#000";
      } else {
        context.strokeStyle = "#000";
      } 
    context.stroke();

    context.restore();
    };