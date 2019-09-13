import { first, last, head, tail, iter } from "methods";

describe("last", () => {
  test("basic", () => {
    let a = [1, 2, 3];
    expect(last(a)).toBe(3);
    expect(first(a)).toBe(1);
    expect(tail(a)).toBe(3);
    expect(head(a)).toBe(1);
    let i = iter(a);
    expect(i.first()).toBe(1);
    expect(i.last()).toBe(3);
    expect(i.last()).toBe(undefined);
    expect(i.first()).toBe(undefined);
    i = iter(a);
    expect(i.next().value).toBe(1);
    expect(i.back().value).toBe(3);
    expect(i.back().value).toBe(2);
    i = iter(a);
    expect(i.head()).toBe(1);
    expect(i.tail()).toBe(3);
    expect(i.tail()).toBe(2);
    expect(i.first()).toBe(undefined);
  });
});
