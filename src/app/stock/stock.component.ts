import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Stock } from './stock';
import { StockService } from './stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(private http: HttpClient, private stockService: StockService) 
  {

  }

  ngOnInit(): void {
  }

  data:{}|any;
  stockObj : Stock = new Stock();
  stockList:Array<Stock>=[];

  addStock(companyCode:number)
  {
    this.stockService.addStock(companyCode, this.stockObj).subscribe(data=>
      {
        this.data = JSON.stringify(data);
        this.stockList.push(this.data);
        alert("Stock data added to Stock and Stock table");

        window.location.reload();
      },
      error=>
      {
        console.log(error);
      })
      
  }
}
