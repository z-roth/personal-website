import { Box, Container, Flex, Text } from "theme-ui";
import TypewriterText from "./TypewriterText";
import { motion } from "framer-motion";
import Spacer from "./Spacer";
import ScrollingHobbies from "./ScrollingHobbies";
import dynamic from "next/dynamic";
import { forwardRef } from "react";

const Spirograph = dynamic(() => import("./Spirograph"), {
  ssr: false,
});

const MotionText = motion(Text);

const Hero = forwardRef((_, ref) => {
  return (
    <Box
      sx={{
        height: "100svh",
        position: "relative",
      }}
    >
      <Container
        sx={{
          flexDirection: "column",
          height: "100svh",
          justifyContent: [undefined, "center"],
          marginTop: [4, 0],
          display: "flex",
        }}
      >
        <Flex sx={{ flexDirection: "column", px: 2 }}>
          <Box ref={ref}>
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
            >
              {"but i'm also a "}
              <ScrollingHobbies />
            </MotionText>
          </Flex>
          <Spacer height={6} />
        </Flex>
      </Container>
      <Spirograph />
    </Box>
  );
});

export default Hero;
