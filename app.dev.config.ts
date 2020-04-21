import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppDevConfig {

  public static readonly BASE_URL: string = 'http://192.168.0.56:8080';
  public static readonly API_URL: string = "http://192.168.0.56:8080";
  public static readonly STS_SERVER: string = "http://192.168.0.56:8080/oidc";
  public static readonly CLIENT_ID: string = "bekhterev-client-dev";


  constructor() { }

}
