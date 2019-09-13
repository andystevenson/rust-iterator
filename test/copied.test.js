import { copied, identity, iter } from "methods";
import { copied as ecopied } from "eager";

const square = x => ((x.value = x.value ** 2), x);

describe("copied", () => {
  test.each([
    [undefined, identity, []],
    [[1, 2, 3, 4], identity, [1, 2, 3, 4]],
    [[1, 2, 3, 4], square, [1, 4, 9, 16]]
  ])("empty", (iterable, using, expected) => {
    expect(copied(iterable, using).collect()).toEqual(expected);
    expect(
      iter(iterable)
        .copied(using)
        .collect()
    ).toEqual(expected);
    expect(ecopied(iterable, using)).toEqual(expected);
  });
});
