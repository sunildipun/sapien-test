import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private _http: HttpClient) { }

  getGames() {
    let url = `http://starlord.hackerearth.com/gamesext`
    return this._http.get(url)
                      .pipe(map(this.extractData), catchError(this.handleError));
  }

  extractData(res: any) {
    return res;
  }

  handleError(error: any) {
    return throwError(error);
  }

}
