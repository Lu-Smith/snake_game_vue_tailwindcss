export function drawSnakeHead2(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
  ) {
  // Head
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, false);
  context.fillStyle = "#f1b963";
  context.fill();
  context.lineWidth = 1;
  context.strokeStyle = '#e46161';
  context.stroke();

  // Eyes
  let eyeOffsetrX = -4;
  let eyeOffsetrY = 4;
  let eyeOffsetlX = -4;
  let eyeOffsetlY = 4;

  context.beginPath();
  context.arc(x + eyeOffsetlX, y + eyeOffsetlY, 2, 0, 2 * Math.PI, false); // Left eye
  context.fillStyle = "#000";
  context.fill();

  context.beginPath();
  context.arc(x + eyeOffsetrX, y - eyeOffsetrY, 2, 0, 2 * Math.PI, false); // Right eye
  context.fillStyle = "#000";
  context.fill();
  }