import None from "None";

describe("None", () => {
  test("all", () => {
    let none = None;
    expect(none.done).toBeTrue();
    expect(none).toBe(None);
  });
});
