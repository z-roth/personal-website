import { Box, Flex, Text } from "theme-ui";
import TypewriterText from "./TypewriterText";
import { motion } from "framer-motion";
import Spacer from "./Spacer";
import { useEffect } from "react";
import ScrollingHobbies from "./ScrollingHobbies";
import dynamic from "next/dynamic";

const Spirograph = dynamic(() => import("./Spirograph"), {
  ssr: false,
});

const MotionText = motion(Text);

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        position: "relative",
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Box>
          <TypewriterText text="hey! " variant="heading1" />
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
        <Flex sx={{ flexDirection: "column" }}>
          <MotionText
            variant="heading2"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: 2.2 }}
          >
            {"i mostly make apps and websites, "}
          </MotionText>
          <MotionText
            variant="heading2"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: 2.8 }}
            sx={{}}
          >
            {"but i'm also a "}
            <ScrollingHobbies />
          </MotionText>
        </Flex>
        <Spacer height={6} />
      </Flex>
      <Spirograph />
    </Box>
  );
};

export default Hero;
