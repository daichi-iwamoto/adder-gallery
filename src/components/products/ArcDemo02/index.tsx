'use client';

import type p5 from 'p5';
import { P5Wrapper } from '@/components/P5Wrapper';
import { JSX } from 'react';

export default function ArcDemo02(): JSX.Element {
  const width = 500;
  const height = 500;
  const row = 6;
  const column = 6;

  const black = "#000000";

  interface RandomAnglesResult {
    startAngle: number;
    endAngle: number;
  }

  const randomAngles = (): RandomAnglesResult => {
    // 0 ~ 360度のランダムな開始角度（ラジアンに変換）
    const startAngle = (Math.floor(Math.random() * 360) * Math.PI) / 180;
    // 開始角度から45度以上、315度以下の範囲でランダムな終了角度を生成
    const angleDiff = Math.floor(Math.random() * 270) + 45;
    const endAngle = startAngle + (angleDiff * Math.PI) / 180;

    return ({startAngle, endAngle})
  }

  interface SimpleArc {
    p: p5;
    columnNum: number;
    mode: p5.ARC_MODE;
  }
  const simpleArc = ({p, columnNum, mode} :SimpleArc) => {
    let rowNum = 1
    const boxSize = width / column
    let yPosition = (boxSize * rowNum) - (boxSize / 2)

    while(rowNum <= row) {
      const {startAngle, endAngle} = randomAngles()
      yPosition = (boxSize * rowNum) - (boxSize / 2)
      let arcSize = boxSize - 20

      p.noFill();
      p.strokeWeight(2);
      p.stroke(black);
      
      while(arcSize >= 0) {
        p.arc((boxSize / 2) + (boxSize * (columnNum - 1)), yPosition, arcSize, arcSize, startAngle, endAngle, mode);
        arcSize -= 8;
      }
      rowNum++
    }
  }

  interface AdvancemenArc {
    p: p5;
    columnNum: number;
    mode: p5.ARC_MODE;
  }
  const advancemenArc = ({p, columnNum, mode} :AdvancemenArc) => {
    let rowNum = 1
    const boxSize = width / column
    
    while(rowNum <= row) {
      let yPosition = (boxSize * rowNum) - (boxSize / 2)
      let xPosition = (boxSize / 2) + (boxSize * (columnNum - 1))
      const {startAngle, endAngle} = randomAngles()
      
      // -10 ~ 10 の間で、絶対値が3以上の数値を生成
      const sign = Math.random() < 0.5 ? -1 : 1;
      const vector = sign * ((Math.random() * 7) + 3); // 5 ~ 15 の範囲を生成し、ランダムに正負を付ける

      let arcSize = boxSize - 20

      p.noFill();
      p.strokeWeight(1);
      p.stroke(black);
      
      while(arcSize >= 0) {
        p.arc(xPosition, yPosition, arcSize, arcSize, startAngle, endAngle, mode);
        yPosition -= vector
        xPosition -= vector
        arcSize -= 10;
      }
      rowNum++
    }
  }

  const sketch = (p: p5) => {
    p.setup = () => {
      p.createCanvas(width, height);
    };

    p.draw = () => {
      p.clear();
      p.frameRate(0.1)
      simpleArc({p, columnNum: 1, mode: "chord"});
      simpleArc({p, columnNum: 2, mode: "open"});
      simpleArc({p, columnNum: 3, mode: "pie"});
      advancemenArc({p, columnNum: 4, mode: "chord"});
      advancemenArc({p, columnNum: 5, mode: "open"});
      advancemenArc({p, columnNum: 6, mode: "pie"});
    //   p.noLoop();
    };
  };

  return (
    <div>
      <div>Demo02</div>
      <P5Wrapper sketch={sketch} width={width} height={height} />
    </div>
  );
}