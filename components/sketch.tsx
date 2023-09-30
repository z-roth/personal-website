import { useEffect, useRef } from "react";
import p5 from "p5";
import { Box } from "@mui/system";

export interface SketchProps {
  sketch: (p5Instance: p5) => void;
}

const Sketch: React.FC<SketchProps> = ({ sketch }) => {
  const p5ContainerRef = useRef(null);

  useEffect(() => {
    const p5Instance = new p5(sketch, p5ContainerRef.current);

    return () => {
      p5Instance.remove();
    };
  }, [sketch]);

  return <Box ref={p5ContainerRef} />;
};

export default Sketch;
