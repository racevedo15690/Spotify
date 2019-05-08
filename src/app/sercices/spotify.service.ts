import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify servicio listo');
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAOmu05DttWVqCOO-8lE5au41YUeoYVHm6A7WlfMl8Om3EsPGjSVeFqZ05EQUPwZO4TobFJzrvOY6UYYn0'
    });

    return this.http.get(url, { headers });
  }


  getNewReleases() {

/*     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAbEGB47oijBcYabFkBPUNT4cp1TiuCpPSFaNliCXRYqjdjoITA5SzxPZSf24Xlmw4KHeuP2LxNuC_MSW0'
    }); */



    return this.getQuery('browse/new-releases')
      .pipe( map( data => data['albums'].items ));

    /* this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers } ) */

  }

  getArtista( termino: string ) {

    /* const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAbEGB47oijBcYabFkBPUNT4cp1TiuCpPSFaNliCXRYqjdjoITA5SzxPZSf24Xlmw4KHeuP2LxNuC_MSW0'
    }); */

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
        .pipe( map( data => data['artists'].items ));

    /* this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers } ) */

  }

}
