const getAbsolute = require("../src/absolute-value");
describe("getAbsolute", () => {
    test("converts a negative number to a positive", () => {
        expect(getAbsolute(-5)).toBe(5);
    });
    test("keeps positive number as is", () => {
        expect(getAbsolute(10)).toBe(10);
    });
    test("returns 0 for 0", () => {
        expect(getAbsolute(0)).toBe(0);
    });
});