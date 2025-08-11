import { useEffect, useRef, useState } from "react";
import p5 from "p5";
import { theme } from "../theme";
import { Box } from "theme-ui";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import useBreakpoints from "../hooks/useBreakpoints";

const MotionBox = motion(Box);

const duration = 60;

// Sometimes the spirograph can be stuttery if not using a build
const Spirograph: React.FC = () => {
  const breakpoint = useBreakpoints();
  const [dimension, setDimension] = useState(
    window.innerWidth < 768 ? window.innerWidth * 2.0 : window.innerWidth
  );
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 20,
  });

  const containerRef = useRef(null);
  const rotateControls = useAnimation();
  const directionRef = useRef(1);
  const prevWidth = useRef(window.innerWidth);

  const rightOffset = breakpoint === "mobile" ? 24 : 64;

  // Start the rotation animation
  useEffect(() => {
    rotateControls.start({
      rotate: 360,
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [rotateControls]);

  useMotionValueEvent(smoothVelocity, "change", (vel) => {
    const scaledVelocity = Math.round(Math.abs(vel) / 100); // scale and round
    const speed = Math.max(1, scaledVelocity); // never slower than 1x base speed

    const direction = vel === 0 ? directionRef.current : Math.sign(vel);
    directionRef.current = direction;

    const newDuration = duration / speed;

    rotateControls.start({
      rotate: 360 * direction,
      transition: {
        duration: newDuration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  });
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth === prevWidth.current) return;
      const newDimension =
        window.innerWidth < 768 ? window.innerWidth * 2.0 : window.innerWidth;
      setDimension(newDimension);
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Initialize p5 sketch
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear the container before creating a new sketch
    container.innerHTML = "";

    const sketch = (p: p5) => {
      let t = 1; // Time variable

      p.setup = () => {
        p.createCanvas(dimension, dimension);
        p.stroke(theme.colors.primary.toString());
        p.strokeWeight(2);
        p.noFill();
        p.frameRate(60);
      };

      p.draw = () => {
        // Spirograph parameters
        const R = dimension / 4; // Radius of the fixed circle
        const r = 10; // Radius of the rolling circle
        const d = dimension / 4; // Distance from the center of the rolling circle to the drawing point

        p.translate(p.width / 2, p.height / 2);
        // Draw multiple points per frame to speed up visibility
        for (let i = 0; i < 20; i++) {
          // Adjust the number of points per frame
          const x = (R - r) * Math.cos(t) + d * Math.cos(((R - r) / r) * t);
          const y = (R - r) * Math.sin(t) - d * Math.sin(((R - r) / r) * t);
          p.point(x, y);
          t += 0.5; // Larger increment for faster drawing
        }
      };
    };

    const canvas = new p5(sketch, containerRef.current);

    return () => {
      canvas.remove();
    };
  }, [dimension]);

  return (
    <MotionBox
      animate={rotateControls}
      sx={{
        position: "absolute",
        bottom: -dimension / 2,
        right: -dimension / 2 - rightOffset * 2,
        width: dimension,
        height: dimension,
        transform: "translate(50%, 50%)",
        pointerEvents: "none",
        zIndex: -1,
      }}
      ref={containerRef}
    />
  );
};

export default Spirograph;
