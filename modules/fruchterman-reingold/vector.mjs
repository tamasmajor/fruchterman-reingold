// only the required functionality for this algorithm
class Vector {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    magnitude() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    toUnitVector() {
        return this.divide(this.magnitude());
    }

    add(augend) {
        return new Vector(this.x + augend.x, this.y + augend.y);
    }

    substract(subtrahend) {
      let negatedSubtrahend = subtrahend.multiply(-1);
      return this.add(negatedSubtrahend);
    }

    multiply(scalarMultiplicand) {
        return new Vector(this.x * scalarMultiplicand, this.y * scalarMultiplicand)
    }

    divide(scalarDivisor) {
      return new Vector(this.x / scalarDivisor, this.y / scalarDivisor)
    }

}

export { Vector }
