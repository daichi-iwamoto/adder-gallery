'use client';

import type p5 from 'p5';
import { P5Wrapper } from '@/components/P5Wrapper';
import { JSX } from 'react';

export default function CircleDemo01(): JSX.Element {
  const width = 500;
  const height = 500;

  const lineColor = "#000";
  const fillColor = "#fff" 

  interface CircleLoopProps {
    p: p5;
    isFill?: boolean;
  }
  const circleLoop = ({
    p,
    isFill
  }: CircleLoopProps) => {
    const startPostion = {
      x: Math.random() * 500,
      y: Math.random() * 500
    }
  
    const baseVector = (Math.random() * 3) + 1
    const vector = {
      x: startPostion.x > 250 ? baseVector * -1 : baseVector,
      y: startPostion.y > 250 ? baseVector * -1 : baseVector
    }

    let circleSize = 1

    p.strokeWeight(1);
    p.stroke(lineColor);
    if (isFill === false) {
      p.noFill();
    } else {
      p.fill(fillColor)
    }
    Array.from({length: 100}).map((_, index) => {
      p.circle(startPostion.x, startPostion.y, circleSize)
      startPostion.x += vector.x
      startPostion.y += vector.y
      circleSize+=4
    })
  }

  const sketch = (p: p5) => {
    p.setup = () => {
      p.createCanvas(width, height);
    };

    p.draw = () => {
      p.clear();
      p.frameRate(.5)
      circleLoop({p: p, isFill: false})
      circleLoop({p: p, isFill: true})
      circleLoop({p: p, isFill: false})
    //   p.noLoop();
    };
  };

  return (
    <div>
      <div>Demo03</div>
      <P5Wrapper sketch={sketch} width={width} height={height} />
    </div>
  );
}