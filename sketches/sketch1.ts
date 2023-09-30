import p5 from "p5";

const sketch1 = (p: p5) => {
  p.setup = () => {
    p.createCanvas(400, 400);
    p.background("black");
    p.circle(200, 200, 400);
  };

  p.draw = () => {};
};

export default sketch1