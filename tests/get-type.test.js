const getType = require("../src/lessons/get-type");
describe("get-type", () => {
    test("gets type of an object", () => {
        expect(getType({})).toBe("object");
    });
    test("gets type of a number", () => {
        expect(getType(42)).toBe("number");
    });
    test("gets type of an array", () => {
        expect(getType([1, 2, 3])).toBe("array");
    });
    test("gets type of a boolean", () => {
        expect(getType(true)).toBe("boolean");
    });
    test("gets type of a null", () => {
        expect(getType(null)).toBe("null");
    });
    test("gets type of a undefined", () => {
        expect(getType(undefined)).toBe("undefined");
    });
    test("gets type of a string", () => {
        expect(getType("hello")).toBe("string");
    });
});