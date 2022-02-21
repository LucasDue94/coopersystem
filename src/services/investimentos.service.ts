import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, retry } from 'rxjs';
import { InvestimentoResponse } from '../models/investimentoResponse';

@Injectable({
  providedIn: 'root'
})
export class InvestimentosService {
  private url = environment.baseUrl;

  constructor(private httpClient: HttpClient) {
  }

  listar(): Observable<InvestimentoResponse> {
    return this.httpClient.get<InvestimentoResponse>(this.url).pipe(
      retry(3)
    );
  }
}
