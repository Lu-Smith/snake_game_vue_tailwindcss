export function drawSnakeHead(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number
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
     context.beginPath();
     context.arc(x - 3, y + 2, 1.5, 0, 2 * Math.PI, false); // Left eye
     context.fillStyle = "#000";
     context.fill();

     context.beginPath();
     context.arc(x - 3, y - 2, 1.5, 0, 2 * Math.PI, false); // Right eye
     context.fillStyle = "#000";
     context.fill();
  }