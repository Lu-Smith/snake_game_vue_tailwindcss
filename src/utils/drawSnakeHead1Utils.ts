export function drawSnakeHead1(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
    snakeNumberChoice: number,
  ) {
  // Head
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, false);
  if (snakeNumberChoice === 1) {
    context.fillStyle = "#c1e205";
  } else if (snakeNumberChoice === 2) {
    context.fillStyle = "#8ef6e4";
  } else if (snakeNumberChoice === 3) {
    context.fillStyle = "#c7b198";
  } else {
    context.fillStyle = "#c4c1e0";
  } 
  context.fill();
  context.lineWidth = 1;
  if (snakeNumberChoice === 1) {
    context.strokeStyle = '#000';
  } else if (snakeNumberChoice === 2) {
    context.strokeStyle = '#8ef6e4';
  } else if (snakeNumberChoice === 3) {
    context.strokeStyle = '#e46161';
  } else {
    context.strokeStyle = '#cbf078';
  } 
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