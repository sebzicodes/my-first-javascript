const makeMultiplier = require("../src/make-multiplier");
describe("makeMultiplier", () => {
    test("doubles a number", () => {
        expect(makeMultiplier(2)(5)).toBe(10);
    });
    test("triples a number", () => {
        expect(makeMultiplier(3)(5)).toBe(15);
    });
    test("multiplies by 1 returns same number", () => {
        expect(makeMultiplier(1)(7)).toBe(7);
    });
    test("multiplies by 0 returns 0", () => {
        expect(makeMultiplier(0)(5)).toBe(0);
    });
});