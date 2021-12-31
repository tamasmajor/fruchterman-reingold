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

}

export { Canvas };