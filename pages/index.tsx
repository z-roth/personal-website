import Link from "next/link";
import { Text, Container } from "theme-ui";

const Home: React.FC = () => {
  return (
    <Container>
      <Text variant="h1">zachary roth</Text>
      <ul>
        <li className="text-4xl m-3 ">
          <Link href="/about">
            <a className="hover:text-secondary link-animation">about</a>
          </Link>
        </li>
        <li className="text-4xl m-3 ">
          <Link href="/projects">
            <a className="hover:text-secondary link-animation">projects</a>
          </Link>
        </li>
        <li className="text-4xl m-3 ">
          <Link href="/resume">
            <a className="hover:text-secondary link-animation">resume</a>
          </Link>
        </li>
        <li className="text-4xl m-3 ">
          <Link href="/contact">
            <a className="hover:text-secondary link-animation">contact</a>
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default Home;
