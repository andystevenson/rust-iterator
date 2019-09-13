import { empty, iter, None } from "methods";

describe("empty", () => {
  test("basic", () => {
    let i = empty();
    expect(i.next()).toEqual(None);
    expect(i.next().done).toBeTrue(None);
    expect(i.next()).toEqual(None);
    expect(i.next().done).toBeTrue(None);
    expect(i.next()).toEqual(None);
    expect(i.next().done).toBeTrue(None);
    expect(i.next()).toEqual(None);
    expect(i.next().done).toBeTrue(None);
    expect(i.next()).toEqual(None);
    expect(i.next().done).toBeTrue(None);
  });

  test("method", () => {
    let i = iter().empty();
    expect(i.next()).toEqual(None);
    expect(i.next().done).toBeTrue(None);
    expect(i.next()).toEqual(None);
    expect(i.next().done).toBeTrue(None);
    expect(i.next()).toEqual(None);
    expect(i.next().done).toBeTrue(None);
    expect(i.next()).toEqual(None);
    expect(i.next().done).toBeTrue(None);
    expect(i.next()).toEqual(None);
    expect(i.next().done).toBeTrue(None);
  });
});
