import p5 from "p5";

class Node {
  p: p5;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  nodes: Node[];

  constructor(p: p5, x1: number, y1: number, x2: number, y2: number) {
    this.p = p;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  draw = () => {
    let n = 0;
    // while (n < 1) {
    //   this.p.line(this.x1, this.y1, this.x2 * n, this.y2 * n);
    //   n += 0.0005;
    //   console.log(n);
    // }
  };
}

const sketch1 = (p: p5) => {
  const width = 255;
  const height = 255;
  const maxBranches = 7;
  const nodes = [];
  let nodeIdx = 0;
  let multiplier = 0;

  p.setup = () => {
    generateNodes();
    p.createCanvas(width, height);
    p.background("orange");
    p.strokeWeight(2);
  };

  p.draw = () => {
    // If the current branch has finished drawing
    if (multiplier >= 1) {
      multiplier = 0;
      if (nodeIdx < nodes.length - 1) {
        nodeIdx++;
      } else {
        p.noLoop();
        return;
      }
    }

    p.line(
      nodes[nodeIdx].x1,
      nodes[nodeIdx].y1,
      nodes[nodeIdx].x2 * multiplier,
      nodes[nodeIdx].y2 * multiplier
    );

    multiplier += 0.005;
  };

  const generateNodes = () => {
    let prev = 0;
    let curr = 1;

    for (let i = 0; i < maxBranches; i++) {
      const next = prev + curr;
      prev = curr;
      curr = next;

      console.log(curr);
    }
  };
};

export default sketch1;
