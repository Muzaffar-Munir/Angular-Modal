import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor(private http: HttpClient) { }

  getData(url: string){
    return this.http.get(environment.apiUrl + url);
  }

  postData(url: string, payload: any){
    return this.http.post(environment.apiUrl + url, payload);
  }

  patchData(url: string, payload: any){
    return this.http.patch(environment.apiUrl + url, payload);
  }

  deleteData(url: string){
    return this.http.delete(environment.apiUrl + url);
  }
}
