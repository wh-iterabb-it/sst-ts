function isObjectLike(value: any): boolean {
  return typeof value === "object" && value !== null;
}

/**
 * isBoolean
 * typeof check for boolean alias
 * @param {} obj - the object in question
 * @return {boolean} - true if typeof boolean
 **/
function isBoolean(obj: any): boolean {
  return typeof obj === "boolean";
}

/**
 * isFinite
 * method determines whether the passed value is an integer
 * @param {} int - the object in question
 * @return {boolean} -
 **/
function isFinite(int: any): boolean {
  return isInteger(int) && !isNaN(parseFloat(int));
}

/**
 * isInteger
 * method determines whether the passed value is an integer
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 * @param {} int - the object in question
 * @return {boolean} - true if integer
 **/
function isInteger(int: any): boolean {
  return Number.isInteger(int);
}

/**
 * isNull
 * method determines whether the passed value is null
 * @param {any} obj - the object in question
 * @return {boolean} - true if null
 **/
function isNull(obj: any): boolean {
  return obj === null;
}

/**
 * isString
 * method determines whether the passed value is typeof string
 * @param {} str - the object in question
 * @return {boolean} - true if string
 **/
function isString(str: any): boolean {
  return typeof str === "string";
}

export { isObjectLike, isString, isBoolean, isFinite, isInteger, isNull };
