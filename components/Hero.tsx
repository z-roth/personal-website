import { Box, Text } from "theme-ui";
import TypewriterText from "./TypewriterText";
import { motion } from "framer-motion";
import Spacer from "./Spacer";
import { useEffect } from "react";
import ScrollingHobbies from "./ScrollingHobbies";

const MotionText = motion(Text);

const Hero: React.FC = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 2000);
  }, []);

  return (
    <Box>
      <Box>
        <TypewriterText text="hiya! " variant="heading1" />
        <Box sx={{ display: "inline-block" }}>
          <TypewriterText text="i'm" variant="heading1" startDelay={1} />
          <TypewriterText
            text=" zack roth"
            variant="heading1"
            startDelay={1.2}
            color="primary"
          />
          <TypewriterText text="." variant="heading1" startDelay={1.8} />
        </Box>
      </Box>
      <Spacer height={5} />
      <Box sx={{ maxWidth: ["none", "50vw"] }}>
        <MotionText
          variant="heading1"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          sx={{
            display: "inline-block",
          }}
        >
          {"i'm mostly a web + app developer - but also a"}
          <ScrollingHobbies />
        </MotionText>
      </Box>
    </Box>
  );
};

export default Hero;
