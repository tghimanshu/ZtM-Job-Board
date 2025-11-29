import React, { useRef, useEffect } from 'react';

/**
 * A simple Canvas component that draws a circle and a rectangle on mount.
 *
 * @returns {JSX.Element} The rendered canvas element.
 */
function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(10, 10, 5, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgb(500,0,0)';
    ctx.stroke();
    ctx.fillStyle = 'rgb(500,0,0)';
    ctx.fillRect(9, 15, 3, 10);
  }, []);

  return <canvas ref={canvasRef} />;
}

export default Canvas;
