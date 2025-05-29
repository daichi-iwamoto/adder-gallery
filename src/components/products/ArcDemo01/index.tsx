'use client';

import type p5 from 'p5';
import { P5Wrapper } from '@/components/P5Wrapper';
import { JSX } from 'react';

export default function ArcDemo01(): JSX.Element {
  const width = 500;
  const height = 500;
  const row = 6;
  const column = 6;

  const simpleColors = {
    base: "#f8fffe",
    dark: "#252b5c",
    highlight: "#6d65bd",
    emphasis: "#cacae3",
  }

  const advancementColors = {
    base: "#e1d4c1",
    dark: "#5a2f2d",
    highlight: "#fcd900",
    emphasis: "#fb2103",
  }

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

  const simpleChordArc = (p: p5) => {
    let rowNum = 1
    const boxSize = width / column
    const chordSize = boxSize - 20
    let yPosition = (boxSize * rowNum) - (boxSize / 2)

    
    while(rowNum <= row) {
        const {startAngle, endAngle} = randomAngles()
        yPosition = (boxSize * rowNum) - (boxSize / 2)

        p.fill(simpleColors.dark);
        p.strokeWeight(4);
        p.stroke(simpleColors.emphasis);
        p.arc(boxSize / 2, yPosition, chordSize, chordSize, startAngle, endAngle, "chord");
        p.fill(simpleColors.highlight);
        p.arc(boxSize / 2, yPosition, chordSize / 2, chordSize / 2, startAngle, endAngle, "chord");
        p.noFill();
        rowNum++
    }
  }

  const simpleOpenArc = (p: p5) => {
    let rowNum = 1
    const boxSize = width / column
    const chordSize = boxSize - 20
    let yPosition = (boxSize * rowNum) - (boxSize / 2)

    
    while(rowNum <= row) {
        const {startAngle, endAngle} = randomAngles()
        yPosition = (boxSize * rowNum) - (boxSize / 2)

        p.fill(simpleColors.dark);
        p.strokeWeight(4);
        p.stroke(simpleColors.emphasis);
        p.arc((boxSize / 2) + boxSize, yPosition, chordSize, chordSize, startAngle, endAngle, "open");
        p.fill(simpleColors.highlight);
        p.arc((boxSize / 2) + boxSize, yPosition, chordSize / 2, chordSize / 2, startAngle, endAngle, "open");
        p.noFill();
        rowNum++
    }
  }

  const simplePieArc = (p: p5) => {
    let rowNum = 1
    const boxSize = width / column
    const chordSize = boxSize - 20
    let yPosition = (boxSize * rowNum) - (boxSize / 2)

    
    while(rowNum <= row) {
        const {startAngle, endAngle} = randomAngles()
        yPosition = (boxSize * rowNum) - (boxSize / 2)

        p.fill(simpleColors.dark);
        p.strokeWeight(4);
        p.stroke(simpleColors.emphasis);
        p.arc((boxSize / 2) + (boxSize * 2), yPosition, chordSize, chordSize, startAngle, endAngle, "pie");
        p.fill(simpleColors.highlight);
        p.arc((boxSize / 2) + (boxSize * 2), yPosition, chordSize / 2, chordSize / 2, startAngle, endAngle, "pie");
        p.noFill();
        rowNum++
    }
  }

  const advancementChordArc = (p: p5) => {
    let rowNum = 1
    const boxSize = width / column
    const chordSize = boxSize - 20
    let yPosition = (boxSize * rowNum) - (boxSize / 2)

    
    while(rowNum <= row) {
        const {startAngle, endAngle} = randomAngles()
        const {startAngle: mdSA, endAngle: mdEA} = randomAngles()
        const {startAngle: smSA, endAngle: smEA} = randomAngles()
        yPosition = (boxSize * rowNum) - (boxSize / 2)

        p.fill(advancementColors.dark);
        p.strokeWeight(2);
        p.stroke(advancementColors.emphasis);
        p.arc((boxSize / 2) + (boxSize * 3), yPosition, chordSize, chordSize, startAngle, endAngle, "chord");
        p.fill(advancementColors.highlight);
        p.arc((boxSize / 2) + (boxSize * 3), yPosition, (chordSize / 3) * 2, (chordSize / 3) * 2, mdSA, mdEA, "chord");
        p.fill(advancementColors.base);
        p.arc((boxSize / 2) + (boxSize * 3), yPosition, chordSize / 3, chordSize / 3, smSA, smEA, "chord");
        p.noFill();
        rowNum++
    }
  }

  const advancementOpenArc = (p: p5) => {
    let rowNum = 1
    const boxSize = width / column
    const chordSize = boxSize - 20
    let yPosition = (boxSize * rowNum) - (boxSize / 2)

    
    while(rowNum <= row) {
        const {startAngle, endAngle} = randomAngles()
        const {startAngle: mdSA, endAngle: mdEA} = randomAngles()
        const {startAngle: smSA, endAngle: smEA} = randomAngles()
        yPosition = (boxSize * rowNum) - (boxSize / 2)

        p.fill(advancementColors.dark);
        p.strokeWeight(2);
        p.stroke(advancementColors.emphasis);
        p.arc((boxSize / 2) + (boxSize * 4), yPosition, chordSize, chordSize, startAngle, endAngle, "open");
        p.fill(advancementColors.highlight);
        p.arc((boxSize / 2) + (boxSize * 4), yPosition, (chordSize / 3) * 2, (chordSize / 3) * 2, mdSA, mdEA, "open");
        p.fill(advancementColors.base);
        p.arc((boxSize / 2) + (boxSize * 4), yPosition, chordSize / 3, chordSize / 3, smSA, smEA, "open");
        p.noFill();
        rowNum++
    }
  }

  const advancementPieArc = (p: p5) => {
    let rowNum = 1
    const boxSize = width / column
    const chordSize = boxSize - 20
    let yPosition = (boxSize * rowNum) - (boxSize / 2)

    
    while(rowNum <= row) {
        const {startAngle, endAngle} = randomAngles()
        const {startAngle: mdSA, endAngle: mdEA} = randomAngles()
        const {startAngle: smSA, endAngle: smEA} = randomAngles()
        yPosition = (boxSize * rowNum) - (boxSize / 2)

        p.fill(advancementColors.dark);
        p.strokeWeight(2);
        p.stroke(advancementColors.emphasis);
        p.arc((boxSize / 2) + (boxSize * 5), yPosition, chordSize, chordSize, startAngle, endAngle, "pie");
        p.fill(advancementColors.highlight);
        p.arc((boxSize / 2) + (boxSize * 5), yPosition, (chordSize / 3) * 2, (chordSize / 3) * 2, mdSA, mdEA, "pie");
        p.fill(advancementColors.base);
        p.arc((boxSize / 2) + (boxSize * 5), yPosition, chordSize / 3, chordSize / 3, smSA, smEA, "pie");
        p.noFill();
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
      simpleChordArc(p);
      simpleOpenArc(p);
      simplePieArc(p);
      advancementChordArc(p);
      advancementOpenArc(p);
      advancementPieArc(p);
    //   p.noLoop();
    };
  };

  return (
    <div>
      <div className="bg-red">Demo01</div>
      <P5Wrapper sketch={sketch} width={width} height={height} />
    </div>
  );
}