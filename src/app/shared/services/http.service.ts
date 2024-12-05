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
    return this.httpClient.post<requestInterface>(`${url}.json`, data).pipe(
      tap((res) => {
        this.data.push({ ...{ key: res.name }, ...data });
      })
    );
    // .subscribe({
    //   next: (res) => {
    //     data.key = res.name;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
  }

  readData(): void {
    this.httpClient
      .get<responseInterface>(`${url}.json`)
      .pipe(
        map((res) => {
          const arr: dataInterface[] = [];
          Object.keys(res).forEach((key) => {
            arr.push({ key, ...res[key] });
          });
          return arr;
        })
      )
      .subscribe({
        next: (res) => {
          this.data = res;
          console.log(this.data);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
