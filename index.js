const onRE = /^on[^a-z]/;
export const isOn = (key) => onRE.test(key);

export const isModelListener = (key) => key.startsWith("onUpdate:");

export const extend = Object.assign;

export const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};

const hasOwnProperty = Object.prototype.hasOwnProperty;
export const hasOwn = (val, key) => hasOwnProperty.call(val, key);

export const isArray = Array.isArray;
export const isMap = (val) => toTypeString(val) === "[object Map]";
export const isSet = (val) => toTypeString(val) === "[object Set]";

export const isDate = (val) => toTypeString(val) === "[object Date]";
export const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
export const isFunction = (val) => typeof val === "function";
export const isString = (val) => typeof val === "string";
export const isSymbol = (val) => typeof val === "symbol";
export const isObject = (val) => val !== null && typeof val === "object";

export const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};

export const objectToString = Object.prototype.toString;
export const toTypeString = (value) => objectToString.call(value);

export const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};

export const isPlainObject = (val) => toTypeString(val) === "[object Object]";

export const isIntegerKey = (key) =>
  isString(key) &&
  key !== "NaN" &&
  key[0] !== "-" &&
  "" + parseInt(key, 10) === key;
