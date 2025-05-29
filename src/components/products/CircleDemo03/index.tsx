'use client';

import type p5 from 'p5';
import { P5Wrapper } from '@/components/P5Wrapper';
import { JSX } from 'react';

export default function CircleDemo03(): JSX.Element {
  const width = 500;
  const height = 500;

  const sketch = (p: p5) => {
    p.setup = () => {
      p.createCanvas(width, height, p.WEBGL);
    };

    p.draw = () => {
      p.clear();
      p.orbitControl();
      p.torus(30);
    };
  };

  return (
    <div>
      <div>Demo04</div>
      <P5Wrapper sketch={sketch} width={width} height={height} />
    </div>
  );
}