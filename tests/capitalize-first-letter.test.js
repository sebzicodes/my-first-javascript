const capitalizeFirstLetter = require("../src/capitalize-first-letter");
describe("capitalizeFirstLetter", () => {
    test("capitalize the first letter", () => {
        expect(capitalizeFirstLetter("hello")).toBe("Hello");
    });
    test("does not change currently capitalized letters", () => {
        expect(capitalizeFirstLetter("World")).toBe("World");
    });
    test("returns empty string unchanged", () => {
        expect(capitalizeFirstLetter("")).toBe("");
    });
});