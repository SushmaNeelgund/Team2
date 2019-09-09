import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    url:string="https://d618776e.ngrok.io/api/Patient";

  constructor(private _http:HttpClient) { }

  getAllSpeciality(){
    return this._http.get(this.url);
    }
}
