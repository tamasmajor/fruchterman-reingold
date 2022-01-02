import { Vertex } from "./vertex.mjs";
export { Vertex };
import { Edge } from "./edge.mjs";
export { Edge };

class Graph {

    constructor() {
        this.vertices = new Map();
        this.edges = [];
    }

    addVertex(id, x, y) {
        this.vertices.set(id, new Vertex(id, x, y));
    }

    addEdge(v, u) {
        this.edges.push(new Edge(v, u));
    }

}

export { Graph };
