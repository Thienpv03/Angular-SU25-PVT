import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Brand {
  id?: number;
  name: string;
}

@Injectable({
  providedIn: "root",
})
export class BrandService {
  private apiUrl = "http://localhost:3000/brands"; 

  constructor(private http: HttpClient) {}

  
  getBrands(): Observable<Brand[]> {
    return this.http
      .get<Brand[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  
  getBrand(id: number): Observable<Brand> {
    return this.http
      .get<Brand>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  
  addBrand(brand: Brand): Observable<Brand> {
    return this.http
      .post<Brand>(this.apiUrl, brand)
      .pipe(catchError(this.handleError));
  }


  updateBrand(brand: Brand): Observable<Brand> {
    return this.http
      .put<Brand>(`${this.apiUrl}/${brand.id}`, brand)
      .pipe(catchError(this.handleError));
  }


  deleteBrand(id: number): Observable<void> {
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
