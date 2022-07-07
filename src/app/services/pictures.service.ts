import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../interfaces/picture.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  //private apiUrl: string = 'https://webapiproductos.azurewebsites.net/api/productos';
  // private apiUrl: string = 'https://api-bg.herokuapp.com/api/productos';
  // private baseUrl: string = 'http://localhost:8080/api';
  private baseUrl: string = environment.baseUrl;
  


  constructor( private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    const url = `${ this.baseUrl }/api/productos`
    return this.http.get<Producto[]>(url)
  }
  
}
