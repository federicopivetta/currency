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
  @IsString()
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

@Injectable()
class C {
  // Field private
  private readonly field: string = 'HAHA';
}

class D {
  @Get()
  getSum(a: number, b: number): void {
    const sum = a + b;
  }
}
