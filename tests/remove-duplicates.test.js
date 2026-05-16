const removeDuplicates = require("../src/remove-duplicates");
describe("removeDuplicates", () => {
    test("removes duplicate numbers from an array", () => {
        expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toBe([1, 2, 3, 4, 5]);
    });
    test("returns the same array if there are no duplicates", () => {
        expect(removeDuplicates([1, 2, 3])).toBe([1, 2, 3]);
    });
    test("returns an empty array unchanged", () => {
        expect(removeDuplicates([])).toBe([]);
    });
})