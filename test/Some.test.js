import Some from "Some";

describe("Some", () => {
  test("all", () => {
    let some = Some();
    expect(some.done).toBeFalse();
    expect(some.value).toBe(undefined);
    some = Some(null);
    expect(some.value).toBe(null);
    some = Some(1);
    expect(some.value).toBe(1);
    let a = { a: 1, b: "two" };
    some = Some(a);
    expect(some.value).toBe(a);
    expect(some.value).toBe(Some(a).value);
  });
});
