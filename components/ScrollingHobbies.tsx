import { Box, Text } from "theme-ui";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const hobbies = [
  "avid bikepacker",
  "startup consultant",
  "plant dad",
  "designer-in-training",
  "amateur photographer",
];

const timeInterval = 2000;

const MotionText = motion(Text);

const ScrollingHobbies: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {}, 1000);

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % hobbies.length);
    }, timeInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="popLayout">
      <MotionText
        key={hobbies[index]}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        sx={{
          display: "inline-block",
          color: "primary",
          whiteSpace: "nowrap",
        }}
      >
        {hobbies[index]}
      </MotionText>
    </AnimatePresence>
  );
};

export default ScrollingHobbies;
