export function drawSnakeHead(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
    direction: number[],
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
    context.fillStyle = "#7dd87d";
  } else if (snakeNumberChoice === 8) {
    context.fillStyle = "#e46161";
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
    context.strokeStyle = '#393e46';
  } else if (snakeNumberChoice === 6) {
    context.strokeStyle = '#118a7e';
  } else if (snakeNumberChoice === 7) {
    context.strokeStyle = '#3baea0';
  } else if (snakeNumberChoice === 8) {
    context.strokeStyle = '#3baea0';
  } else if (snakeNumberChoice === 9) {
    context.strokeStyle = '#3baea0';
  } else if (snakeNumberChoice === 10) {
    context.strokeStyle = '#3baea0';
  } else {
    context.strokeStyle = '#5e87b8';
  } 
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