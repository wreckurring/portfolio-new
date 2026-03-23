import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CanvasWrap = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 25%),
    linear-gradient(135deg, rgba(57, 231, 255, 0.08), transparent 40%);

  canvas {
    width: 100%;
    height: 100%;
    opacity: 0.9;
  }
`;

const createNodes = (count, width, height) =>
  Array.from({ length: count }, (_, index) => ({
    id: index,
    x: Math.random() * width,
    y: Math.random() * height,
    dx: (Math.random() - 0.5) * 0.55,
    dy: (Math.random() - 0.5) * 0.55,
    pulse: Math.random() * Math.PI * 2,
  }));

const NetworkCanvas = () => {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof window === 'undefined') {
      return undefined;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0;
    let height = 0;
    let nodes = [];

    const setSize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      nodes = createNodes(Math.max(18, Math.floor(width / 70)), width, height);
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (const node of nodes) {
        if (!mediaQuery.matches) {
          node.x += node.dx;
          node.y += node.dy;

          if (node.x < 0 || node.x > width) {
            node.dx *= -1;
          }

          if (node.y < 0 || node.y > height) {
            node.dy *= -1;
          }

          node.pulse += 0.02;
        }
      }

      for (let index = 0; index < nodes.length; index += 1) {
        const source = nodes[index];

        for (let targetIndex = index + 1; targetIndex < nodes.length; targetIndex += 1) {
          const target = nodes[targetIndex];
          const dx = source.x - target.x;
          const dy = source.y - target.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 165) {
            context.strokeStyle = `rgba(57, 231, 255, ${0.22 - distance / 900})`;
            context.lineWidth = distance < 90 ? 1.15 : 0.8;
            context.beginPath();
            context.moveTo(source.x, source.y);
            context.lineTo(target.x, target.y);
            context.stroke();
          }
        }
      }

      for (const node of nodes) {
        const radius = 1.5 + Math.sin(node.pulse) * 0.5;
        context.fillStyle = 'rgba(237, 242, 247, 0.65)';
        context.beginPath();
        context.arc(node.x, node.y, radius, 0, Math.PI * 2);
        context.fill();

        context.fillStyle = 'rgba(57, 231, 255, 0.12)';
        context.beginPath();
        context.arc(node.x, node.y, radius + 4, 0, Math.PI * 2);
        context.fill();
      }

      frameRef.current = window.requestAnimationFrame(draw);
    };

    setSize();
    draw();
    window.addEventListener('resize', setSize);

    return () => {
      window.removeEventListener('resize', setSize);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <CanvasWrap aria-hidden="true">
      <canvas ref={canvasRef} />
    </CanvasWrap>
  );
};

export default NetworkCanvas;
