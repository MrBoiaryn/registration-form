import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataInterface } from '../interface/data.interface';
import { requestInterface } from '../interface/request.interface';
import { responseInterface } from '../interface/response.interface';
import { map, Observable, tap } from 'rxjs';

const url = 'https://registration-form-945e3-default-rtdb.firebaseio.com/data';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  data: dataInterface[] = [];

  constructor(private httpClient: HttpClient) {}

  createData(data: dataInterface): Observable<requestInterface> {
    return this.httpClient.post<requestInterface>(`${url}.json`, data);
  }

  readData() {
    return this.httpClient.get<responseInterface>(`${url}.json`).pipe(
      map((res) => {
        const arr: dataInterface[] = [];
        Object.keys(res).forEach((key) => {
          arr.push({ key, ...res[key] });
        });
        return arr;
      })
    );
  }
}
