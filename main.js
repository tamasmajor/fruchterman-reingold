import { Canvas } from "./modules/canvas.mjs";
import { GraphGenerator } from "./modules/graph/graph-generator.mjs";
import { FruchtermanReingold } from "./modules/fruchterman-reingold/fruchterman-reingold.mjs"

document.addEventListener('DOMContentLoaded', function(event) {
    let canvas = null;
    let graph = null;
    let generateBtn = document.querySelector('.generate-btn');
    let animateBtn = document.querySelector('.animate-btn');
    let verticesNumberInput = document.querySelector('input.vertices-number');

    generateBtn.addEventListener('click', generate, true);
    animateBtn.addEventListener('click', startAnimation, true);

    function generate() {
      let oldCanvas = document.querySelector('canvas');
      if (oldCanvas) {
        oldCanvas.remove();
      }

      // add the canvas
      canvas = new Canvas(600, 600);
      canvas.create(document.body);

      let generator = new GraphGenerator();
      graph = generator.generateComplete(verticesNumberInput.value);
      canvas.draw(graph);

      animateBtn.disabled = false;
    }

    function startAnimation() {
      function sleep(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
      }

      async function animate() {
          let fruchtermanReingold = new FruchtermanReingold(graph, canvas.aspectRatio());
          while (fruchtermanReingold.hasMoreSteps()) {
              await sleep(10);
              fruchtermanReingold.rearrange();
              canvas.draw(graph);
          }
      }
      animate();
    }

});
