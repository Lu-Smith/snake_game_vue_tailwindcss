export function drawMouseEventCanvas(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
  ) {
  context.fillStyle = '#9ba6a5'; 
  context.fillRect(x, y, width, height);
  }