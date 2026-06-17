const makeMultiplier = require("../src/make-multiplier");

describe("makeMultiplier", () => {
    test("doubles a number", () => {
        const double = makeMultiplier(2);
        expect(double(5)).toBe(10);
    });

    test("triples a number", () => {
        const triple = makeMultiplier(3);
        expect(triple(5)).toBe(15);
    });

    test("multiplies by 1 returns same number", () => {
        const identity = makeMultiplier(1);
        expect(identity(7)).toBe(7);
    });

    test("multiplies by 0 returns 0", () => {
        const zero = makeMultiplier(0);
        expect(zero(5)).toBe(0);
    });
});