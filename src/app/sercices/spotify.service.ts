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
      'Authorization': 'Bearer BQCRGOO8ZWZrnk_2PffFjKJ4ydCbQzI2uu224etTX7CbzJnho-KexqM8-kdwmTtx1xaWOc8MaZ_gU38d2DU'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    .subscribe( data => {
      console.log(data);
    });

  }
}
