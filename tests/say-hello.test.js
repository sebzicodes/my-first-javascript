const sayHello = require("../src/say-hello");

describe("sayHello", () => {
  test("says hello to gabe", () => {
    expect(sayHello('gabe')).toBe('hello gabe');
  });
  test("says hello to jade", () => {
    expect(sayHello('jade')).toBe('hello jade');
  });
  test("says hello to johnny", () => {
    expect(sayHello('johnny')).toBe('hello johnny');
  });
});
