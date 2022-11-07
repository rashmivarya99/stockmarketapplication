import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) 
  {

  }

  stockList: Stock[] |any;
  private apiPostStock:string= `http://localhost:8082/api/stock/add`;
  
  addStock(companyCode:number, stock:Stock): Observable<Stock>
  {
    return this.http.post<Stock>(`${this.apiPostStock}/${companyCode}`,stock);
  }
}
