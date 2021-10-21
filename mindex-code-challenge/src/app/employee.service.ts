import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {Employee} from './employee';

@Injectable()
export class EmployeeService {
  private url = '/api/employees';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url)
      .pipe(catchError(this.handleError));
  }

  get(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.url}/${id}`)
      .pipe(catchError(this.handleError));
  }

  save(employ: Employee): Observable<Employee> {
    const response = (!!employ.id) ? this.put(employ) : this.post(employ);
    return response.pipe(catchError(this.handleError));
  }

  remove(employ: Employee): Observable<never> {
    return this.http
      .delete<never>(`${this.url}/${employ.id}`)
      .pipe(catchError(this.handleError));
  }

  private post(employ: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url, employ);
  }

  private put(employ: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.url}/${employ.id}`, employ);
  }

  private handleError(res: HttpErrorResponse | any): Observable<never> {
    return throwError(res.error || 'Server error');
  }
}