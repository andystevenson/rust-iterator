import { zip, unzip, iter, Some, None } from "methods";

describe("zip", () => {
  test("basic", () => {
    let z = [[1, 2, 3], [4, 5, 6]];
    let rz = iter(z[0]).zip(z[1]);
    expect(rz.next()).toEqual(Some([1, 4]));
    expect(rz.next()).toEqual(Some([2, 5]));
    expect(rz.next()).toEqual(Some([3, 6]));
    expect(rz.next()).toEqual(None);
    let urz = [...unzip(...zip(...z))];
    expect(urz).toEqual(z);

    z = [[1, 2, 3], [4, 5, 6], [8, 9, 10]];
    urz = [...unzip(...zip(...z))];
    expect(urz).toEqual(z);
  });
});
