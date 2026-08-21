import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  const mouse = useRef({
    x: 0,
    y: 0,
    visible: false,
  });

  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.visible = true;
    };

    const handleMouseEnter = () => {
      mouse.current.visible = true;
    };

    const handleMouseLeave = () => {
      mouse.current.visible = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    const createParticle = () => {
      if (!mouse.current.visible) return;

      const { x, y } = mouse.current;

      particles.current.push({
        x: x + (Math.random() - 0.5) * 12,
        y: y + (Math.random() - 0.5) * 12,

        size: Math.random() * 2.5 + 1,

        velocityX: (Math.random() - 0.5) * 1.8,
        velocityY: (Math.random() - 0.5) * 1.8,

        life: 1,

        decay: Math.random() * 0.015 + 0.01,

        color:
          Math.random() > 0.2
            ? "245, 158, 11"
            : "71, 85, 105",
      });

      if (particles.current.length > 200) {
        particles.current.shift();
      }
    };

    const drawCursor = () => {
      if (!mouse.current.visible) return;

      const { x, y } = mouse.current;

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 35);

      gradient.addColorStop(0, "rgba(245, 158, 11, 0.35)");
      gradient.addColorStop(0.4, "rgba(245, 158, 11, 0.12)");
      gradient.addColorStop(1, "rgba(245, 158, 11, 0)");

      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(x, y, 35, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.strokeStyle = "rgba(245, 158, 11, 0.5)";
      ctx.lineWidth = 1;
      ctx.arc(x, y, 9, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.fillStyle = "rgba(245, 158, 11, 1)";
      ctx.shadowColor = "rgba(245, 158, 11, 0.9)";
      ctx.shadowBlur = 12;
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.beginPath();
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
      ctx.arc(x - 1, y - 1, 1.2, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      try {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        createParticle();

        particles.current.forEach((particle) => {
          particle.x += particle.velocityX;
          particle.y += particle.velocityY;

          particle.velocityX *= 0.985;
          particle.velocityY *= 0.985;

          particle.life -= particle.decay;

          const alpha = Math.max(0, particle.life);
          const radius = Math.max(0, particle.size * particle.life);

          if (radius <= 0) return;

          ctx.beginPath();

          ctx.fillStyle = `rgba(${particle.color}, ${alpha})`;
          ctx.shadowColor = `rgba(${particle.color}, ${alpha})`;
          ctx.shadowBlur = 6;

          ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);

          ctx.fill();

          ctx.shadowBlur = 0;
        });

        particles.current = particles.current.filter(
          (particle) => particle.life > 0
        );

        drawCursor();
      } catch (err) {
        console.error("Animation frame error:", err);
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[99999] pointer-events-none"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};

export default AnimatedBackground;