'use client';

import type p5 from 'p5';
import { JSX, useEffect, useRef, useState } from 'react';

interface P5WrapperProps {
  sketch: (p: p5) => void;
  width?: number;
  height?: number;
}

export const P5Wrapper = ({ sketch, width = 500, height = 500 }: P5WrapperProps): JSX.Element => {
  const wrapper = useRef<HTMLDivElement>(null);
  const [p5Instance, setP5Instance] = useState<p5 | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initP5 = async () => {
      const P5 = (await import('p5')).default;

      if (wrapper.current !== null) {
        setP5Instance(new P5(sketch, wrapper.current));
      }
    };

    initP5();
  }, [sketch]);

  return (
    <div
      ref={wrapper}
      style={{ width: `${width}px`, height: `${height}px` }}
      className="overflow-hidden rounded-md shadow-lg"
    />
  );
};
