import Link from "next/link";
import dynamic from "next/dynamic";
import { SketchProps } from "../components/sketch";
import sketch1 from "../sketches/sketch1";

const HomeScreenAnimation = dynamic<SketchProps>(
  () => import("../components/sketch"),
  { ssr: false }
);

const Home: React.FC = () => {
  return (
    <div className="p-6 fade-in-page">
      <h1 className="text-6xl m-3 font-semibold">zachary roth</h1>
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
      <HomeScreenAnimation sketch={sketch1} />
    </div>
  );
};

export default Home;
