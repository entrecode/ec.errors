// Type definitions for ec.errors
// Project: ec.errors
// Definitions by: Simon Scherzinger <scherzinger@entrecode.de>

declare module 'ec.errors' {
  export function newError(code: string | number, detail?: string, verbose?: string): Problem;

  export function convertValidationError(tv4Result: any): Problem;

  export function getLocalized(error: Problem, locale?: string): Problem;

  export interface Problem extends Error {
    status: number;
    code: number;
    title: string;
    type: string;
    detail: string;
    verbose: string;
    requestID: string;
    subErrors: Problem | Array<Problem>;
  }
}