export { Verticle } from "./verticle.mjs";
import { Edge } from "./edge.mjs";
export { Edge };

class Graph {

    constructor() {
        this.vertices = new Map();
        this.edges = [];
    }

    addVerticle(verticle) {
        this.vertices.set(verticle.id, verticle);
    }

    addEdge(v, u) {
        this.edges.push(new Edge(v, u));
    }

}

export { Graph };