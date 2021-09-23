import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private REST_API_SERVER = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }

  public sendGetRequest():any{
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public sendPostRequest(name:string,mobile:string,email:string):any{

    let data = {
      name,
      mobile,
      email
    }
    return this.httpClient.post(this.REST_API_SERVER,data)
  }
}
