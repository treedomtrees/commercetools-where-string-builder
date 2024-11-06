import { safeString, stringifyValue } from "./utils";

/**
 * Builds a field selector
 * @constructor
 * @param fields
 */
export const Field = (...fields: Array<string>): string => {
  if (fields.length < 1) {
    throw new Error("Insufficient fields provided to build field selector");
  }

  if (fields.length > 1) {
    return safeString`${fields.shift()}(${Field(...fields)})`;
  }

  return safeString`${fields[0]}`;
};

/**
 * Builds an AND logical operator
 * @param fields
 * @constructor
 */
export const And = (...fields: Array<string | Array<string>>): string =>
  fields
    .flat(Infinity)
    .map((field) => safeString`(${field})`)
    .join(" and ");

/**
 * Builds an OR logical operator
 * @param fields
 * @constructor
 */
export const Or = (...fields: Array<string | Array<string>>): string =>
  fields
    .flat(Infinity)
    .map((field) => safeString`(${field})`)
    .join(" or ");

/**
 * Builds a logical operator
 * Escapes strings with quotes and stringifies booleans
 * @param field
 * @param operator
 * @param value
 * @constructor
 */
export const Compare = (
  field: string,
  operator: "=" | "!=" | ">" | "<" | ">=" | "<=" | "<>",
  value: number | boolean | string
) => safeString`${field} ${operator} ${stringifyValue(value)}`;

/**
 * Builds an EQUAL logical operator
 * Escapes strings with quotes and stringifies booleans
 * @param field
 * @param value
 * @constructor
 */
export const Equals = (field: string, value: number | boolean | string) =>
  Compare(field, "=", value);

/**
 * Builds a NOT EQUAL logical operator
 * Escapes strings with quotes and stringifies booleans
 * @param field
 * @param value
 * @constructor
 */
export const NotEquals = (field: string, value: number | boolean | string) =>
  Compare(field, "!=", value);

/**
 * Builds a GREATER THAN logical operator
 * Escapes strings with quotes
 * @param field
 * @param value
 * @constructor
 */
export const GreaterThan = (field: string, value: number | string) =>
  Compare(field, ">", value);

/**
 * Builds a LESS THAN logical operator
 * Escapes strings with quotes
 * @param field
 * @param value
 * @constructor
 */
export const LessThan = (field: string, value: number | string) =>
  Compare(field, "<", value);

/**
 * Builds a GREATER OR EQUAL logical operator
 * Escapes strings with quotes
 * @param field
 * @param value
 * @constructor
 */
export const GreaterOrEqualThan = (field: string, value: number | string) =>
  Compare(field, ">=", value);

/**
 * Builds a LESS OR EQUAL logical operator
 * Escapes strings with quotes
 * @param field
 * @param value
 * @constructor
 */
export const LessOrEqualThan = (field: string, value: number | string) =>
  Compare(field, "<=", value);

/**
 * Builds a CONTAINS logical operator
 * Escapes strings with quotes and stringifies booleans
 * @param field
 * @param kind
 * @param values
 * @constructor
 */
export const Contains = (
  field: string,
  kind: "any" | "all",
  values: Array<number | boolean | string>
) =>
  safeString`${field} contains ${kind} (${values
    .map(stringifyValue)
    .join(", ")})`;

/**
 * Builds a CONTAINS ALL logical operator
 * Escapes strings with quotes and stringifies booleans
 * @param field
 * @param values
 * @constructor
 */
export const ContainsAll = (
  field: string,
  values: Array<number | boolean | string>
) => Contains(field, "all", values);

/**
 * Builds a CONTAINS ANY logical operator
 * Escapes strings with quotes and stringifies booleans
 * @param field
 * @param values
 * @constructor
 */
export const ContainsAny = (
  field: string,
  values: Array<number | boolean | string>
) => Contains(field, "any", values);

/**
 * Builds an IN logical operator
 * Escapes strings with quotes and stringifies booleans
 * @param field
 * @param values
 * @constructor
 */
export const In = (
  field: string,
  values: Array<number | boolean | string>
) =>
  safeString`${field} in (${values
    .map(stringifyValue)
    .join(", ")})`;

/**
 * Builds an IN logical operator
 * Escapes strings with quotes and stringifies booleans
 * @param field
 * @param values
 * @constructor
 */
export const NotIn = (
  field: string,
  values: Array<number | boolean | string>
) =>
  safeString`${field} not in (${values
    .map(stringifyValue)
    .join(", ")})`;

/**
 * Builds an IS DEFINED logical operator
 * @param field
 * @constructor
 */
export const IsDefined = (field: string) => safeString`${field} is defined`;

/**
 * Builds an IS NOT DEFINED logical operator
 * @param field
 * @constructor
 */
export const IsNotDefined = (field: string) =>
  safeString`${field} is not defined`;

/**
 * Builds a HAS CHANGED logical operator
 * @param field
 * @constructor
 */
export const HasChanged = (field: string) => safeString`${field} has changed`;

/**
 * Builds a HAS NOT CHANGED logical operator
 * @param field
 * @constructor
 */
export const HasNotChanged = (field: string) =>
  safeString`${field} has not changed`;

/**
 * Builds a WITHIN CIRCLE logical operator
 * @param field
 * @param longitude
 * @param latitude
 * @param radius
 * @constructor
 */
export const WithinCircle = (
  field: string,
  longitude: number,
  latitude: number,
  radius: number
) => safeString`${field} within circle(${longitude}, ${latitude}, ${radius})`;
