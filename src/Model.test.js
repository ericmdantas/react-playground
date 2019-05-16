import { Model } from "./Model";

describe('Model', () => {
    describe('criacao', () => {
        it('ok', () => {
            const m = new Model()
            expect(m.x).toBe(1)
            expect(m.y).toBe(2)
            expect(m.z).toBe(3)
        })
    })
})