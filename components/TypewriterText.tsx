import { useEffect, useState } from "react";
import { Box, Text } from "theme-ui";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  startDelay?: number;
  variant?: string;
  color?: string;
}

const MotionText = motion(Text);

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  delay = 0.05,
  startDelay = 0,
  variant,
  color = "text",
}) => {
  return (
    <>
      {/* This hidden text is used for accessibility purposes, ensuring screen readers can read the full text. */}
      <Text
        sx={{
          position: "absolute",
          clip: "rect(0 0 0 0)",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        {text}
      </Text>
      {text.split("").map((char, index) => (
        <MotionText
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: startDelay + index * delay,
          }}
          variant={variant}
          color={color}
          sx={{
            display: "inline-block",
            whiteSpace: "pre",
          }}
        >
          {char}
        </MotionText>
      ))}
    </>
  );
};

export default TypewriterText;
