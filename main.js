import { Canvas } from "./modules/canvas.mjs";

document.addEventListener('DOMContentLoaded', function(event) {
    let canvas = new Canvas(500, 400);
    canvas.create(document.body);
});