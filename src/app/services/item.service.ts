import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private dataUrl = 'assets/data/items.json';

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get(this.dataUrl);
  }
}
