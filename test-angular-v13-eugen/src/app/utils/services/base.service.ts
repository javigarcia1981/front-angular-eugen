import { Observable, throwError } from 'rxjs';

export abstract class BaseService {
  apiEndpoint = 'http://localhost:3000';

  protected constructor(api?: string) {
    if (api) {
      this.apiEndpoint = `${this.apiEndpoint}/${api}`;
    }
  }

  protected handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (!error.error) {
        error.error = {};
      }
      error.error.operation = operation;
      error.error.result = result;
      error.messageToShow =
        error.error.message || error.message || 'An error occurred';

      return throwError(error as T);
    };
  }
}
