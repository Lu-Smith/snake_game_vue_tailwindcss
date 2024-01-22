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
  } else if (snakeNumberChoice === 4) {
    context.fillStyle = "#fdb44b";
  } else if (snakeNumberChoice === 5) {
    context.fillStyle = "#e46161";
  } else if (snakeNumberChoice === 6) {
    context.fillStyle = "#118a7e";
  } else if (snakeNumberChoice === 7) {
    context.fillStyle = "#5dacbd";
  } else if (snakeNumberChoice === 8) {
    context.fillStyle = "#a2c11c";
  } else if (snakeNumberChoice === 9) {
    context.fillStyle = "#118a7e";
  } else if (snakeNumberChoice === 10) {
    context.fillStyle = "#7dd87d";
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
  } else if (snakeNumberChoice === 4) {
    context.strokeStyle = '#e46161';
  } else if (snakeNumberChoice === 5) {
    context.strokeStyle = '#e46161';
  } else if (snakeNumberChoice === 6) {
    context.strokeStyle = '#118a7e';
  } else if (snakeNumberChoice === 7) {
    context.strokeStyle = '#5dacbd';
  } else if (snakeNumberChoice === 8) {
    context.strokeStyle = '#a2c11c';
  } else if (snakeNumberChoice === 9) {
    context.strokeStyle = '#3baea0';
  } else if (snakeNumberChoice === 10) {
    context.fillStyle = "#7dd87d";
  } else {
    context.strokeStyle = '#5e87b8';
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