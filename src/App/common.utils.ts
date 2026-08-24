/**
 * check if value !== undefined && !== null
 */
export function isDefined<T>(value: T | null | undefined): value is T {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  return (value as T) !== undefined && (value as T) !== null;
}

/**
 * check if value is an object (array returns false)
 */
export function isObject(value: unknown): value is object {
  return isDefined(value) && typeof value === 'object' && !Array.isArray(value);
}

/**
 * check if value is an array
 */
export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

/**
 * check if value is a string
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}
