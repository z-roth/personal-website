import { Text, Container, Box } from "theme-ui";
import Spacer from "../components/Spacer";
import Hero from "../components/Hero";

const Home: React.FC = () => {
  return (
    <Container>
      <Spacer space={7} />
      <Hero />
    </Container>
  );
};

export default Home;
