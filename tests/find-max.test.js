const findMax = require("../src/find-max");
describe("findMax", () => {
    test("finds the largest positive number", () => {
        expect(findMax([1, 5, 3, 9, 2])).toBe(9);
    });
    test("works correctly with negative numbers", () => {
        expect(findMax([-10, -5, -2, -8])).toBe(-2);
    });
    test("returns null for empty array", () => {
        expect(findMax([""])).toBe(null);
    });
});