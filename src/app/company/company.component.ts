import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Stock } from '../stock/stock';
import { Company } from './company';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  pageSizeOption: [] | any;

  displayedColumns: string[] = [
    'companyCode',
    'companyName',
    'companyCEO',
    'companyTurnover',
    'companyWebsite',
    'stockExchange',
    'stockPrice',
  ];
  public dataSource: any;

  constructor(
    private http: HttpClient,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.getCompanyList();
  }

  data: {} | any;
  companyarr: Array<Company> = [];

  addCompanyDetails(companyObj: Company) {
    this.companyService.addCompany(companyObj).subscribe(
      (data) => {
        this.getCompanyList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCompanyList() {
    this.companyService.getAllCompanies().subscribe(
      (data) => {
        this.companyarr = Object.values(data);
        this.dataSource == new MatTableDataSource<Company>(this.companyarr);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteCompany(companyCode: number) {
    this.companyService.deleteCompany(companyCode).subscribe(
      (data) => {
        this.getCompanyList();
      },
      (error) => {
        this.getCompanyList();
        console.log(error);
      }
    );
  }

  updateCompany(companyObj: Company) {
    this.companyService.updateCompany(companyObj).subscribe(
      (data) => {
        this.getCompanyList();
      },
      (error) => {
        console.log(error);
      }
    );
  }


  companym: Company = new Company();
  companyData: Array<Company> = [];
  response: any;
  getCompanyByCode() {
    this.companyService
      .getCompanyByCode(this.companym.companyCode)
      .subscribe((data) => {
        let val =data;
        this.companyData = Object.values(val);

        console.log('get companies ' + this.companyData);
        //let vals = data.body.Data;
        this.data = JSON.stringify(val);
        console.log(this.data);

        alert('Search result given!');
        // window.location.reload();
      });
  }
}
