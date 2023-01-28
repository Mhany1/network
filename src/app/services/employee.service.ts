import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iemployee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  url:string = '../assets/employee.json'

  postData(): Observable<Iemployee[]>{
   return this.http.get<Iemployee[]>(this.url)
  }
}
