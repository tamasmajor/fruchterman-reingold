import { Canvas } from "./modules/canvas.mjs";
import { GraphGenerator } from "./modules/graph-generator.mjs";

document.addEventListener('DOMContentLoaded', function(event) {
    // add the canvas
    let canvas = new Canvas(600, 400);
    canvas.create(document.body);

    // generate a complete graph
    let generator = new GraphGenerator();
    let graph = generator.generateComplete(8);
    canvas.draw(graph);
    
});