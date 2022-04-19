import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  newsApiUrl= 'https://newsapi.org/v2/top-headlines?country=in&apiKey=d56079de2633400086d63c02c07bf48a';
  techApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=d56079de2633400086d63c02c07bf48a';
  entertainmentApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=d56079de2633400086d63c02c07bf48a';

  topHeading(): Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  techNews(): Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }
  entertainmentNews(): Observable<any>
  {
    return this._http.get(this.entertainmentApiUrl);
  }
}
