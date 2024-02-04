import React, { useEffect, useRef } from 'react';
import p5 from 'p5';


const MySketch = ({ imagePath }) => {
    const sketchRef = useRef(); // Create a ref for the sketch container
  
    useEffect(() => {
      let myP5;
  
      const sketch = (p) => {
        let img;
        let ellipses = [];
  
        p.preload = () => {
          img = p.loadImage(imagePath);
        };
  
        p.setup = () => {
          p.createCanvas(640, 480).parent(sketchRef.current); // Attach the canvas to the sketchRef
          img.resize(640, 480);
          p.noLoop();
          p.fill(0);
        };
  
        p.draw = () => {
          p.background(255);
          img.loadPixels();
          for (let y = 0; y < p.height; y += 4) {
            for (let x = 0; x < p.width; x += 4) {
              let index = (x + y * p.width) * 4;
              let r = img.pixels[index];
              let g = img.pixels[index + 1];
              let b = img.pixels[index + 2];
              let brightness = (r + g + b) / 3;
              p.noStroke();
              p.ellipse(x, y, p.map(brightness, 255, 0, 1, 4));
            }
          }
        };
      };
  
      myP5 = new p5(sketch);
  
      return () => {
        if (myP5) {
          myP5.remove(); // Cleanup the sketch when the component is unmounted
        }
      };
    }, [imagePath]); // Rerun the effect if imagePath changes
  
    return <div ref={sketchRef} />; // Use the ref here
  };
  export default MySketch;
