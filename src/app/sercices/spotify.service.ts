import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Options } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify servicio listo');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDBUv3LOhshxn0GRVrpV0Apo2mt6RRKU0ats5y2MMQwzXevhLknEoeR_FG_y9PPswsjP1Z9uTTeyBY4NbE'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers } );

  }
}
