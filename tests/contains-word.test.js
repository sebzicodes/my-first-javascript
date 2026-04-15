const containsWord = require("../src/contains-word");

describe("containsWord", () => {
    test("returns true if the word exists in the sentence", () => {
        expect(containsWord("The quick brown fox", "fox")).toBe(true);
    });
    test("returns false if the word is not found", () => {
        expect(containsWord("I love coding", "pizza")).toBe(false);
    });
    test("is case sensitive", () => {
        expect(containsWord("Hello World", "hello")).toBe(false);
    });
});