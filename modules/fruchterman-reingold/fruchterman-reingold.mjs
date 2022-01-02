import { Vector } from './vector.mjs';

class FruchtermanReingold {

    constructor(graph, aspectRatio) {
        this.graph = graph;
        this.frameWidth = 1;
        this.frameHeight = 1 / aspectRatio;

        this.vertices = this.createVerticesWithVectors(this.graph);
        this.k = this.calculateOptimalVerticleDistance();
        this.edges = this.graph.edges;
        this.temp = 0.75;
        this.steps = 20000;
        this.currentStep = 0;
    }

    hasMoreSteps() {
        return this.currentStep < this.steps;
    }

    // TODO: fix the issue when the positions are exactly the same
    rearrange() {
        this.calculateRepulsiveForces();
        this.calculateAttrativeForces();
        this.adjust();
        this.cool();
        this.updateGraph();
        this.currentStep++;
    }

    calculateOptimalVerticleDistance() {
       return Math.sqrt((this.frameWidth * this.frameHeight) / this.vertices.size);
    }

    calculateRepulsiveForces() {
        for (const v of this.vertices.values()) {
            v.disp = new Vector(0, 0);
            for (const u of this.vertices.values()) {
                if (v.id != u.id) {
                    let delta = u.pos.substract(v.pos);
                    let displacement = delta.toUnitVector().multiply(this.repulsiveForce(delta.magnitude()));
                    v.disp = v.disp.add(displacement);
                }
            }
        }
    }

    repulsiveForce(x) {
        return Math.pow(x, 2) / this.k;
    }

    calculateAttrativeForces() {
        this.edges.forEach(edge => {
            let v = this.vertices.get(edge.v.id);
            let u = this.vertices.get(edge.u.id);
            let delta = u.pos.substract(v.pos);
            let displacement = delta.toUnitVector().multiply(this.attractiveForce(delta.magnitude()))
            v.disp = v.disp.substract(displacement);
            u.disp = u.disp.add(displacement);
        });
    }

    attractiveForce(x) {
        return Math.pow(this.k, 2) / x;
    }

    adjust() {
        for (const v of this.vertices.values()) {
            let maxDisplacement = Math.min(v.disp.magnitude(), this.temp);
            let delta = v.disp.toUnitVector().multiply(maxDisplacement);
            v.pos = v.pos.add(delta);
            v.pos.x = Math.min(Math.abs(v.pos.x), 1);
            v.pos.y = Math.min(Math.abs(v.pos.y), 1);
        }
    }

    cool() {
      // easeOutQuart
      let delta = 1 - Math.pow(1 - this.currentStep / this.steps, 4);
      this.temp = this.temp * (1 - delta)
    }

    updateGraph() {
        for (const v of this.vertices.values()) {
            let gv = this.graph.vertices.get(v.id);
            gv.x = v.pos.x;
            gv.y = v.pos.y;
            this.graph.vertices.set(v.id, gv);
        }
    }

    createVerticesWithVectors(graph) {
        let vertices = new Map();
        for (const v of graph.vertices.values()) {
            vertices.set(v.id, new Vertex(v.id, v.x, v.y));
        }
        return vertices;
    }

}

class Vertex {

    constructor(id, x, y) {
        this.id = id;
        this.pos = new Vector(x, y);
        this.disp = new Vector(0, 0);
    }

}

export { FruchtermanReingold }
