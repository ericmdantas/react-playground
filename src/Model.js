export class Model {
    constructor(m) {
        this.x = 1
        this.y = 2
        this.z = 3

        Object.assign(this, m)
    }
}