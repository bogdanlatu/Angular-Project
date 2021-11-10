import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../Pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private apiUrl = 'https://petstore.swagger.io/v2/pet';

  constructor(private http: HttpClient) { }

  getPetsByStatus(status: string): Observable<Pet[]> {
    const url = `${this.apiUrl}/findByStatus?status=${status}`;
   //console.log(status);
    return this.http.get<Pet[]>(url);
  }

  getPetById(id: number): Observable<Pet> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Pet>(url);
  }

}
