import { randomUUID } from 'crypto';
import { getMongoosePageForHasNext, getMongooseSorting } from '@libs/nest-utils';
import { ReportStatus, ReportType } from '../types/report.types';

import type { MongoosePagination } from '@libs/utils';

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

class A {
  private printHello(): string {
    return 'Hello';
  }
}

/**
 * class B
 */
class B {
  public printIf(print: boolean): string | void {
    // if print is true, then return, otherwise do not
    if (print) return 'Printed';
  }
}
