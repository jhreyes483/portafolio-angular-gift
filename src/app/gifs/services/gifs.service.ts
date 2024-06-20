import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse, Gif } from '../interfaces/gifs.intefaces';
// url para tipar data https://quicktype.io/agregar a

@Injectable({ providedIn: 'root' })
export class GifsService {

  constructor(
    private http: HttpClient
  ) {

  }


  public gifList: Gif[] = [];

  /** Se hace de esta forma para que solo sa modificable desde el servicio */
  private _tagsHistory: string[] = [];
  private apiKey: string = '6tQM5ah5jWJ5IZGZHCuvTMBa003aeJeY';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  get tagsHistory() {
    return [...this._tagsHistory]
  }


  public searchTag(tag: string): void {
    if (tag.length === 0) return;
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

    this.http.get<SearchResponse>(this.serviceUrl + '/search', { params: params })
      .subscribe(resp => {
        this.gifList = resp.data;
      })
    this.organizeHistory(tag)
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase(); // deja todo en minúscula

    if (this._tagsHistory.includes(tag)) {
      /** si ya existe esto en el array lo borra */
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag != tag)
    }
    this._tagsHistory.unshift(tag) // inserta el tag de primeras
    this._tagsHistory = this.tagsHistory.splice(0, 10); // deja los primeros 10 tags
  }





}
