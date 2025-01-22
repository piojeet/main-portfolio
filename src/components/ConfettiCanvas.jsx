import React, { useEffect, useRef } from 'react';

const ConfettiCanvas = () => {
  // Create a reference for the canvas element
  const canvasRef = useRef(null);

  useEffect(() => {
    // Access the canvas element and its 2D drawing context
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Function to resize the canvas to fill the entire screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initial call to set the canvas size
    resizeCanvas();
    // Update canvas size when the window is resized
    window.addEventListener('resize', resizeCanvas);

    // Class representing a confetti particle
    class Confetti {
      constructor(x, y) {
        this.x = x; // Initial horizontal position
        this.y = y; // Initial vertical position
        this.size = Math.random() * 5 + 5; // Random size between 5 and 10
        this.speedX = Math.random() * 6 - 3; // Random horizontal speed (-3 to 3)
        this.speedY = Math.random() * -3 - 3; // Random upward speed (-3 to -6)
        this.gravity = 0.1; // Gravity effect pulling the confetti downward
        this.rotation = Math.random() * 360; // Random initial rotation angle
        this.rotationSpeed = Math.random() * 10 - 5; // Random rotation speed
        this.color = `hsl(${Math.random() * 360}, 70%, 50%)`; // Random color
      }

      // Update confetti position and rotation
      update() {
        this.speedY += this.gravity; // Increase vertical speed by gravity
        this.x += this.speedX; // Move horizontally
        this.y += this.speedY; // Move vertically
        this.rotation += this.rotationSpeed; // Rotate
      }

      // Draw the confetti particle
      draw() {
        ctx.save(); // Save the current canvas state
        ctx.translate(this.x, this.y); // Move the origin to the confetti position
        ctx.rotate((this.rotation * Math.PI) / 180); // Rotate by the current rotation angle
        ctx.fillStyle = this.color; // Set the color
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size); // Draw a rectangle
        ctx.restore(); // Restore the previous canvas state
      }
    }

    let confetti = []; // Array to store all confetti particles

    // Function to create multiple confetti particles at a given position
    const createConfetti = (x, y) => {
      for (let i = 0; i < 50; i++) {
        confetti.push(new Confetti(x, y)); // Add 50 new particles to the array
      }
    };

    // Animation loop to update and redraw the confetti
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

      confetti = confetti.filter((particle) => {
        particle.update(); // Update particle properties
        particle.draw(); // Draw the particle
        return particle.y < canvas.height; // Keep only particles still on the screen
      });

      requestAnimationFrame(animate); // Request the next frame
    };

    animate(); // Start the animation

    // Handle click event to create confetti at the click position
    const handleClick = (e) => {
      createConfetti(e.clientX, e.clientY);
    };

    // Add event listener for click events
    document.addEventListener('click', handleClick);

    // Cleanup event listeners when the component unmounts
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef} // Attach the ref to the canvas element
      style={{
        position: 'fixed', // Position the canvas over the entire screen
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none', // Make the canvas non-interactive
        zIndex: 10000, // Ensure it appears above other elements
      }}
    />
  );
};

export default ConfettiCanvas;
