import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MathData} from './mathdata';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) {
    }
    getData(): Observable<MathData>{
  return this.http.get<MathData>('http://127.0.0.1:5000/');
}
}

