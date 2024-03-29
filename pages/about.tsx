import { Container } from "@mui/system";
import Link from "next/link";

const About = () => {
  return (
    <Container>
      <h1 className="text-5xl m-3">
        <Link href="/">
          <b>zachary roth </b>
        </Link>
        / about
      </h1>
      <h3 className="text-2xl m-3">
        hi! i&#39;m zachary. you can call me zack, though.
      </h3>
      <p className="text-lg m-3">
        i&#39;m currently a student at northeastern university studying computer
        science, with a concentration in software development. if all goes to
        plan, i should be graduating at the end of 2023.
      </p>
      <p className="text-lg m-3">
        when i&#39;m not tinkering with code, i have about a million different
        hobbies.
      </p>
    </Container>
  );
};

export default About;
