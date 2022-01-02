function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

class Canvas {

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.ctx = null;
    }

    create(parent) {
        let wrapperEl = document.createElement('div');
        let canvasEl = document.createElement('canvas');
        parent.appendChild(wrapperEl);
        wrapperEl.appendChild(canvasEl);

        canvasEl.width = this.width;
        canvasEl.height = this.height;

        this.ctx = canvasEl.getContext('2d');
    }

    draw(graph) {
        this.ctx.fillStyle = "#03DAC6";
        this.ctx.strokeStyle = "#00695C";
        this.ctx.clearRect(0, 0, this.width, this.height);
        graph.edges.forEach(edge => {
            this.ctx.beginPath();
            this.ctx.moveTo(edge.v.x * this.width, edge.v.y * this.height);
            this.ctx.lineTo(edge.u.x * this.width, edge.u.y * this.height);
            this.ctx.stroke();
        });
        for (const vertex of graph.vertices.values()) {
            this.ctx.beginPath();
            this.ctx.arc(vertex.x * this.width, vertex.y * this.height, 6, degToRad(0), degToRad(360), false);
            this.ctx.fill();
        }
    }

    aspectRatio() {
      return this.width / this.height;
    }

}

export { Canvas };
