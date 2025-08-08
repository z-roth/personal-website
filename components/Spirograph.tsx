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

const MotionBox = motion(Box);

const duration = 60;

// Sometimes the spirograph can be stuttery if not using a build
const Spirograph: React.FC = () => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 20,
    stiffness: 100,
  });
  const velocityFactor = useTransform(smoothVelocity, [-1000, 1000], [-5, 5], {
    clamp: false,
  });

  const dimension =
    window.innerWidth < 768 ? window.innerWidth * 2.0 : window.innerWidth; // Dimension of the canvas

  // Spirograph parameters
  const R = dimension / 4; // Radius of the fixed circle
  const r = 10; // Radius of the rolling circle
  const d = dimension / 4; // Distance from the center of the rolling circle to the drawing point

  const containerRef = useRef(null);
  const rotateControls = useAnimation();
  const directionRef = useRef(1);

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

  // Update rotation based on scroll velocity
  useMotionValueEvent(velocityFactor, "change", (velocity) => {
    const absVelocity = Math.abs(velocity);

    const newDirection =
      velocity > 0 ? 1 : velocity < 0 ? -1 : directionRef.current;

    if (newDirection !== directionRef.current) {
      directionRef.current = newDirection;
    }

    const newDuration = Math.min(duration / absVelocity, duration);
    console.log("New Duration: ", newDuration);

    rotateControls.start({
      rotate: 360 * directionRef.current,
      transition: {
        duration: newDuration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  });

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
  }, []);

  return (
    <MotionBox
      animate={rotateControls}
      sx={{
        position: "absolute",
        bottom: [-dimension / 1.75, "auto"], // TODO: this is a mess, no idea how this works
        top: ["auto", 0],
        right: -dimension / 1.75 - 2 * r,
        width: dimension,
        height: dimension,
        overflow: "hidden",
      }}
    >
      <Box ref={containerRef} />
    </MotionBox>
  );
};

export default Spirograph;
