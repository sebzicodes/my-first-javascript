const getWordleFeedback = require("../src/get-wordle-feedback");
    describe("getWordleFeedback", () => {
        test("all letters correct", () => {
            expect(getWordleFeedback("apple", "apple")).toEqual([1, 1, 1, 1, 1]);
        });
        test("all letters absent", () => {
            expect(getWordleFeedback("zzzzz", "apple")).toEqual([-1, -1, -1, -1, -1]);
        });
        test("some letters correct and present", () => {
            expect(getWordleFeedback("apron", "apple")).toEqual([
                1, //a
                1, //p
                -1, //r
                -1, //o
                -1, //n
            ]);
        });
        test("all letters present but in wrong positions", () => {
            expect(getWordleFeedback("pleap", "apple")).toEqual([
            0, 0, 0, 0, 0
        ]);
        test("handles duplicates correctly", () => {
            expect(getWordleFeedback("poppy", "apple")).toEqual([
                0,//p(present)
                -1,//o
                1,//p(correct spot)
                -1,//p(duplicate, no match left)
                -1,//y
            ]);
        });
    });