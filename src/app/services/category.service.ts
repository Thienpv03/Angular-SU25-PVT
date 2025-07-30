import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Category {
  id?: number;
  name: string;
}

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  private apiUrl = "http://localhost:3000/categories"; 

  constructor(private http: HttpClient) {}


  getCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }


  getCategory(id: number): Observable<Category> {
    return this.http
      .get<Category>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }


  addCategory(category: Category): Observable<Category> {
    return this.http
      .post<Category>(this.apiUrl, category)
      .pipe(catchError(this.handleError));
  }


  updateCategory(category: Category): Observable<Category> {
    return this.http
      .put<Category>(`${this.apiUrl}/${category.id}`, category)
      .pipe(catchError(this.handleError));
  }


  deleteCategory(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = "An unknown error occurred!";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client Error: ${error.error.message}`;
    } else {
      errorMessage = `Server Error: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
