import { Verticle } from "./verticle.mjs";
export { Verticle };
import { Edge } from "./edge.mjs";
export { Edge };

class Graph {

    constructor() {
        this.vertices = new Map();
        this.edges = [];
    }

    addVerticle(id, x, y) {
        this.vertices.set(id, new Verticle(id, x, y));
    }

    addEdge(v, u) {
        this.edges.push(new Edge(v, u));
    }

}

export { Graph };