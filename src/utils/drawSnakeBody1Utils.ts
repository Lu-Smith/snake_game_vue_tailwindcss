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
        context.fillStyle = "#f70776";
        } else if (snakeNumberChoice === 2) {
        context.fillStyle = "#8ef6e4";
        } else if (snakeNumberChoice === 3) {
        context.fillStyle = "#dde0ab";
        } else if (snakeNumberChoice === 4) {
        context.fillStyle = "#fdb44b";
        } else if (snakeNumberChoice === 5) {
        context.fillStyle = "#e46161";
        } else if (snakeNumberChoice === 6) {
          context.fillStyle = "#118a7e";
        } else if (snakeNumberChoice === 7) {
          context.fillStyle = "#f5c7f7";
        } else if (snakeNumberChoice === 8) {
          context.fillStyle = "#6643b5";
        } else if (snakeNumberChoice === 9) {
          context.fillStyle = "#118a7e";
        } else if (snakeNumberChoice === 10) {
          context.fillStyle = "#7dd87d";
        } else {
        context.fillStyle = "#8dc6ff";
        } 
    } else {
        if (snakeNumberChoice === 1) {
        context.fillStyle = "#66bfbf";
        } else if (snakeNumberChoice === 2) {
        context.fillStyle = "#0092ca";
        } else if (snakeNumberChoice === 3) {
        context.fillStyle = "#e46161";
        } else if (snakeNumberChoice === 4) {
        context.fillStyle = "#fdb44b";
        } else if (snakeNumberChoice === 5) {
        context.fillStyle = "#393e46";
        } else if (snakeNumberChoice === 6) {
          context.fillStyle = "#fdb44b";
        } else if (snakeNumberChoice === 7) {
          context.fillStyle = "#6643b5";
        } else if (snakeNumberChoice === 8) {
          context.fillStyle = "#93e4c1";
        } else if (snakeNumberChoice === 9) {
          context.fillStyle = "#222831";
        } else if (snakeNumberChoice === 10) {
          context.fillStyle = "#7dd87d";
        } else {
        context.fillStyle = "#5dacbd";
        } 
    }

    context.fill();
    context.lineWidth = 1;
    if (snakeNumberChoice === 1) {
        context.strokeStyle = "#000";
      } else if (snakeNumberChoice === 2) {
        context.strokeStyle = "#0092ca";
      } else if (snakeNumberChoice === 3) {
        context.strokeStyle = "#e46161";
      } else if (snakeNumberChoice === 4) {
        context.strokeStyle = "#e46161";
      } else if (snakeNumberChoice === 5) {
        if (isEven) {
          context.strokeStyle = "#e46161";
        } else {
          context.strokeStyle = "#393e46";
        }
      } else if (snakeNumberChoice === 6) {
        if (isEven) {
          context.strokeStyle = "#118a7e";
        } else {
          context.strokeStyle = "#fdb44b";
        }
      } else if (snakeNumberChoice === 7) {
        context.strokeStyle = '#430f58';
      } else if (snakeNumberChoice === 8) {
        context.strokeStyle = '#3baea0';
      } else if (snakeNumberChoice === 9) {
        context.strokeStyle = '#93e4c1';
      } else if (snakeNumberChoice === 10) {
        context.strokeStyle = '#3baea0';
      } else {
        context.strokeStyle = "#5e87b8";
      } 
    context.stroke();

    context.restore();
    };