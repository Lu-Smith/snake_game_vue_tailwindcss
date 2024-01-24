export function drawMouseEventCanvas(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    direction: number[],
  ) {
    const [dx, dy] = direction;

    if (dx === -1 && dy === 0) {
      context.fillStyle = '#f95959'; // moveLeft
    } else if (dx === 1 && dy === 0) {
      context.fillStyle = '#9ba6a5'; // moveRight
    } else if (dy === -1 && dx === 0) {
      context.fillStyle = '#a2a8d3'; // moveUp
    } else if (dy === 1 && dx === 0) {
      context.fillStyle = '#bbe4e9'; // moveDown
    } else {
      context.fillStyle = '#dde0ab'; // default
    }
  
    context.fillRect(x, y, width, height);
  }