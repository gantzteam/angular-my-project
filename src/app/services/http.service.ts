import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = 'http://localhost:4200/';
  hostUrl = 'http://localhost:8080/my-project/';

  headers = new Headers();
  options = new RequestOptions();

  constructor(private http: HttpClient, private http2: Http) {
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.options.headers = this.headers;
  }

  get2(endpoint) {
    return this.http2.get(this.hostUrl + endpoint, this.options).pipe(map(res => res.json()));
  }

  post2(endpoint, params) {
    return this.http2.post(this.hostUrl + endpoint, params, this.options).pipe(map(res => res.json()));
  }

  get(endpoint) {
    return this.http.get(this.baseUrl + endpoint);
  }
  post(endpoint, params) {
    return this.http.post(this.baseUrl + endpoint, params);
  }

}
