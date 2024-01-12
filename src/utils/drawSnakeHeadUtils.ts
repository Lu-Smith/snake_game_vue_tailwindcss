export function drawSnakeHead(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
    direction: number[],
  ) {
      // Head
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, false);
  context.fillStyle = "#c1e205";
  context.fill();
  context.lineWidth = 1;
  context.strokeStyle = '#000';
  context.stroke();

  // Eyes
  let eyeOffsetrX = 0;
  let eyeOffsetrY = 0;
  let eyeOffsetlX = 0;
  let eyeOffsetlY = 0;

  if (direction[0] === 1) {
    // Moving right
    eyeOffsetlX = 1.5;
    eyeOffsetrX = 1.5;
    eyeOffsetlY = 2;
    eyeOffsetrY = 2.5;
  } else if (direction[0] === -1) {
    // Moving left
    eyeOffsetlX = -1.5;
    eyeOffsetrX = -1.5;
    eyeOffsetlY = 2;
    eyeOffsetrY = 2.5;
  }

  if (direction[1] === 1) {
    // Moving down
    eyeOffsetlX = 2;
    eyeOffsetrX = -2;
    eyeOffsetlY = 2.5;
    eyeOffsetrY = -2.5;
  } else if (direction[1] === -1) {
    // Moving up
    eyeOffsetlX = 2;
    eyeOffsetrX = -2;
    eyeOffsetlY = -2;
    eyeOffsetrY = 2;
  }

  context.beginPath();
  context.arc(x + eyeOffsetlX, y + eyeOffsetlY, 1, 0, 2 * Math.PI, false); // Left eye
  context.fillStyle = "#000";
  context.fill();

  context.beginPath();
  context.arc(x + eyeOffsetrX, y - eyeOffsetrY, 1, 0, 2 * Math.PI, false); // Right eye
  context.fillStyle = "#000";
  context.fill();
  }