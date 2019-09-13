import iter from "./iter";

export default function unzip(iterator, other, ...rest) {
  const iterators = [];
  iterators.push(iter(iterator), iter(other), ...rest.map(i => iter(i)));

  let gather = [];

  // get the values out in the right order
  let consuming = true;
  let chunkSize = iterators.length;
  while (consuming) {
    const collect = [];
    for (const i of iterators) {
      const current = i.next();
      if (current.done) {
        consuming = false;
        break;
      }
      collect.push(current.value);
    }

    if (consuming) {
      gather.push(...collect);
    }
  }

  let result = [];
  while (gather.length) {
    let chunk = [];
    for (let i = 0; i < chunkSize; i++) {
      chunk.push(gather.shift());
    }
    result.push(chunk);
  }
  return result;
}
