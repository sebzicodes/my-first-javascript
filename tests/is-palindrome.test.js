const isPalindrome = require("../src/is-palindrome");
describe("isPalindrome", () => {
    test("returns true for valid palindrome", () => {
        expect(isPalindrome("racecar")).toBe(true);
    });
    test("returns false for non-palindrome", () => {
        expect(isPalindrome("hello")).toBe(false);
    });
    test("returns true for an empty string", () => {
        expect(isPalindrome("")).toBe(true);
    });
 });