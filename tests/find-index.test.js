const findIndex = require("../src/find-index");
describe("findIndex", () => {
    test("returns the index of present element", () => {
        expect(findIndex(["apple", "banana", "cherry"], "banana")).toBe(1);
    });
    test("return -1 if the element is not in the array", () => {
        expect(findIndex(["red", "blue"], "green")).toBe(-1);
    });
    test("returns the first occurance if there are any duplicates", () => {
        expect(findIndex([10, 20, 10, 30], 10)).toBe(0);
    });
});