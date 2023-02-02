/**
 * Stringifies a value escaping strings and converting booleans to 'true' and 'false'
 * @param value
 */
export const stringifyValue = (value: number | boolean | string) => {
  if (typeof value === "string") {
    return `"${value}"`;
  } else if (typeof value === "boolean") {
    return Boolean(value).toString();
  }
  return value;
};

/**
 * Template tag that checks types of provided values
 * @param strings
 * @param values
 */
export const safeString = (strings: TemplateStringsArray, ...values: any) => {
  let composedString = "";

  for (let i = 0; i < strings.length; i++) {
    composedString += strings[i];

    if (i < values.length) {
      if (!["string", "number"].includes(typeof values[i])) {
        throw new Error(
          `Where strings cannot take type ${typeof [
            values[i],
          ]} as values as this will generate an error. Check syntax after '${composedString}'`
        );
      }

      composedString += values[i];
    }
  }

  return composedString;
};
