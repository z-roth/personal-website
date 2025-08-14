import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { Box } from "theme-ui";

const MotionBox = motion(Box);

const ButtonWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <MotionBox
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95, opacity: 0.8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      sx={{ display: "inline-block", cursor: "pointer" }}
    >
      {children}
    </MotionBox>
  );
};

export default ButtonWrapper;
