import { Container, Text, Image, Flex, Box } from "theme-ui";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Spacer from "./Spacer";

const MotionFlex = motion(Flex);

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 0.9,
        y: 0,
        scale: 1,
        backdropFilter: "blur(10px)",
      });
    }
  }, [isInView]);

  return (
    <Container>
      <Spacer height={4} />
      <MotionFlex
        initial={{ opacity: 0, y: -20, scale: 0.85 }}
        transition={{ duration: 0.5 }}
        animate={controls}
        sx={{
          backgroundColor: "primary",
          borderRadius: 24,
          flexDirection: ["column", "row"],
          alignItems: "center",
          gap: 4,
          p: 3,
        }}
        ref={ref}
      >
        <Flex sx={{ width: 240, height: 240, flexShrink: 0 }}>
          <Image
            src="/images/headshot.jpg"
            sx={{
              filter: "grayscale(100%) hue-rotate(90deg) saturate(500%)",
              borderRadius: "50%",
              width: 240,
              height: 240,
              objectFit: "cover",
            }}
          />
        </Flex>
        <Flex sx={{ flexDirection: "column", gap: 1, flex: 1 }}>
          <Text variant="heading2" color="background">
            welcome! thanks for stopping by.
          </Text>
          <Text variant="body" color="background">
            hey! in case ya missed it, the name's zack. also known as
            "zachary"... in more professional contexts.
          </Text>
          <Text variant="body" color="background">
            i'm a frontend-focused engineer with a knack for design based in
            brooklyn, new york. i love building things from the ground up, with
            a focus on clean, efficient, accessible, and most importantly - fun
            - user experiences.
          </Text>
          <Text variant="body" color="background">
            when not coding away, you can find me biking all around new york
            (and beyond), tending to my plants, chilling in prospect park with a
            good book, trying my fifty thousandth attempt at landing a treflip,
            or tearing my fingers apart trying to learn a new guitar
            fingerpicking pattern.
          </Text>
        </Flex>
      </MotionFlex>
    </Container>
  );
};

export default AboutSection;
