const checkInteger = require("../src/check-integer");
describe("checkinteger", () => {
    test("returns true for whole numbers", () => {
        expect(checkInteger(500)).toBe(true);
    })
    test("returns false for decimals", () => {
        expect(checkInteger(5.5)).toBe(false);
    })
    test("returns false for strings that look like numbers", () => {
        expect(checkInteger("10")).toBe(false);
    })
})