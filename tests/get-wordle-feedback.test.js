const getWordleFeedback = require("../src/get-wordle-feedback");
describe ("getWordleFeedback", () => {
    test("all letters correct", () => {
        expect(getWordleFeedback("apple", "apple")).toEqual([1, 1, 1, 1, 1]);
    });
    test("all letters absent", () => {
        expect(getWordleFeedback("zzzzz", "apple")).toEqual([-1, -1, -1, -1, -1]);
    });
    test("some letters correct and present", () => {
        expect(getWordleFeedback("apron", "apple")).toEqual([1, 1, -1, -1, -1]);
    });
    test("letters present but in wrong positions", () => {
        expect(getWordleFeedback("pleap", "apple")).toEqual([0, 0, 0, 0, 0]);
    });
    test("handles duplicate letters correctly", () => {
        expect(getWordleFeedback("poppy", "apple")).toEqual([0, -1, 1, -1, -1]);
    });
});