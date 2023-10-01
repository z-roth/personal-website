import p5 from "p5";

class Node {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  nodes: Node[];

  constructor(x1: number, y1: number, x2: number, y2: number) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  draw = (p: p5) => {
    p.line(this.x1, this.y1, this.x2, this.y2);
  }
}

const sketch1 = (p: p5) => {
  const width = 255;
  const height = 255;
  const maxBranches = 7;

  p.setup = () => {
    p.createCanvas(width, height);
    p.background("orange");
  };

  p.draw = () => {
    p.line(width/2, height/2, 0, 0)
  };

  const drawBranches = () => {
    let prev = 0;
    let curr = 1;

    for (let i = 0; i < maxBranches; i++) {
      const next = prev + curr;
      prev = curr;
      curr = next;

      console.log(curr);
    } 

  }

};

export default sketch1