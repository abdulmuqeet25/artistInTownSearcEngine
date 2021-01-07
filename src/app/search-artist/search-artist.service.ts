import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SearchArtistService {
  constructor(private https: HttpClient) { }

  public get(url): Observable<any> {
    return this.https.get(`${environment.BASE_URL}/artists/` + url + `?app_id=` + environment.APP_ID);
  }
  public getEventsofArtist(nameArtist): Observable<any> {
    return this.https.get(`${environment.BASE_URL}/artists/` + nameArtist + `/events?app_id=` + environment.APP_ID)
  }
}
