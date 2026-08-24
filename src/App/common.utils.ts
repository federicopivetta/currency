/**
 * check if value !== undefined && !== null
 */
export function isDefined<T>(value: T | null | undefined): value is T {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  return (value as T) !== undefined && (value as T) !== null;
}

/**
 * check if value is a string
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export class LibReportDto {
  name: string;

  /**
   * The id of the report.
   */
  id: string;
}

/**
 * The report that analyze the docs of a repo.
 */
export class DocReportDto {
  name: string;

  /**
   * The id of the report.
   */
  id: string;
}
