import { Canvas } from "./modules/canvas.mjs";
import { Graph, Verticle } from "./modules/graph/graph.mjs";

document.addEventListener('DOMContentLoaded', function(event) {
    let canvas = new Canvas(600, 400);
    canvas.create(document.body);

    // TEST GRAPH
    let graph = new Graph();
    // nice layout
    // graph.addVerticle(new Verticle(1, 0.5, 0.2));
    // graph.addVerticle(new Verticle(2, 0.2, 0.5));
    // graph.addVerticle(new Verticle(3, 0.4, 0.8));
    // graph.addVerticle(new Verticle(4, 0.6, 0.8));
    // graph.addVerticle(new Verticle(5, 0.8, 0.5));
    // ugly layout
    graph.addVerticle(new Verticle(1, 0.5, 0.3));
    graph.addVerticle(new Verticle(2, 0.7, 0.2));
    graph.addVerticle(new Verticle(3, 0.5, 0.5));
    graph.addVerticle(new Verticle(4, 0.3, 0.8));
    graph.addVerticle(new Verticle(5, 0.6, 0.1));
    graph.addEdge(graph.vertices.get(1), graph.vertices.get(2));
    graph.addEdge(graph.vertices.get(2), graph.vertices.get(3));
    graph.addEdge(graph.vertices.get(3), graph.vertices.get(4));
    graph.addEdge(graph.vertices.get(4), graph.vertices.get(5));
    graph.addEdge(graph.vertices.get(5), graph.vertices.get(1));
    graph.addEdge(graph.vertices.get(1), graph.vertices.get(3));
    graph.addEdge(graph.vertices.get(1), graph.vertices.get(4));
    graph.addEdge(graph.vertices.get(2), graph.vertices.get(5));
    canvas.draw(graph);
});