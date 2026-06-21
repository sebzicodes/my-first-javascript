const makeCounter = require("../src/make-counter");
describe("makeCounter", () => {
    test("starts at the given number", () => {
        expect(makeCounter(10).getCount()).toBe(10);
    });
    test("increment increases count by 1", () => {
        const counter = makeCounter(10);
        counter.increment();
        expect(counter.getCount()).toBe(11);
    });
    test("decrement decreases count by 1", () => {
        const counter = makeCounter(10);
        counter.decrement();
        expect(counter.getCount()).toBe(9);
    });
    test("multiple increments work correctly", () => {
        const counter = makeCounter(0);
        counter.increment();
        counter.increment();
        counter.increment();
        expect(counter.getCount()).toBe(3);
    });
    test("each counter has its own independent count", () => {
        const counter1 = makeCounter(0);
        const counter2 = makeCounter(0);
        counter1.increment();
        counter1.increment();
        expect(counter1.getCount()).toBe(2);
        expect(counter2.getCount()).toBe(0);
    });
});