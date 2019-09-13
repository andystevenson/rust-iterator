export const ADVICE = {
  range: "out of range",
  empty: "iterable is empty",
  callback: "callback must be a function",
  reduce: "reduce of empty iterable with no initial value",
  elementRequiresNext: "element requires next property",
  elementRequiresPrev: "element requires prev property",
  notIterable: "not an iterator"
};

export const Assert = {
  check() {
    //   console.log(Assert.check.name, parameters);
  }
};

export function isIterable(iterable, doThrow = false) {
  // checks for null and undefined
  if (
    iterable == null ||
    !(typeof iterable === "function" || typeof iterable === "object")
  ) {
    return false;
  }

  if (typeof iterable[Symbol.iterator] === "function") {
    return true;
  } else if (doThrow) {
    error(TypeError, iterable, "isIterable", { iterable }, ADVICE.notIterable);
  }
  return false;
}

export function error(Type, object, method, args, advice) {
  const className = Reflect.getPrototypeOf(object).constructor.name;
  const message = `${className}.${method}(${Object.keys(args)
    .map(arg => {
      if (typeof args[arg] === "function") {
        return `${arg} = function`;
      } else {
        return `${arg} = ${args[arg]}`;
      }
    })
    .join(", ")}) - ${advice}`;
  return new Type(message);
}

export function defaultCmp(a, b) {
  const as = a.toString();
  const bs = b.toString();
  return as.localeCompare(bs);
}

export const identity = v => v;
export const istrue = () => true;
export const isfalse = () => false;
export const isge = (a, b) => a >= b;
export const isgt = (a, b) => a > b;
export const islt = (a, b) => a < b;
export const isle = (a, b) => a < b;
export const iseq = (a, b) => a === b;
export const isne = (a, b) => a !== b;
