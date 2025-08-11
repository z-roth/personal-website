import { Box, Container } from "theme-ui";
import Hero from "../components/Hero";
import Spacer from "../components/Spacer";

const Home: React.FC = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Container>
        <Hero />
      </Container>
    </Box>
  );
};

export default Home;
