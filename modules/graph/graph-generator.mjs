import { Graph } from "./graph.mjs";

class GraphGenerator {

    generateComplete(n) {
        let graph = new Graph();
        for (let i = 1; i <= n; i++) {
            graph.addVerticle(i, Math.random(), Math.random());
        }
        for (let i = 1; i < n; i++) {
            for (let j = i + 1; j <= n; j++) {
                graph.addEdge(graph.vertices.get(i), graph.vertices.get(j));
            }
        }
        return graph;
    }
}

export { GraphGenerator };