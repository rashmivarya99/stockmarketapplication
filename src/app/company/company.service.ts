import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from './company';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  companies: Company[] | any;

  private apiGet: string = `http://localhost:8082/api/v1/getAllCompanies`;
 
  private apiPost: string = `http://localhost:8082/api/v1/addCompany`;
  private apiDelete: string = `http://localhost:8082/api/v1/delete`;
  private apiGetById: string = `http://localhost:8082/api/v1/getCompanyByCode`;
  private apiUpdate: string = `http://localhost:8082/api/v1/update`;

  addCompany(companymodel: Company): Observable<Company> {
    return this.http.post<Company>(this.apiPost, companymodel);
  }

  getAllCompanies(): Observable<Array<Company>> {
    return this.http.get<Array<Company>>(this.apiGet);
  }

  deleteCompany(companyCode: number): Observable<string> {
    return this.http.delete<string>(`${this.apiDelete}/${companyCode}`);
  }

  getCompanyByCode(companyCode: number): Observable<Array<Company>> {
    return this.http.get<Array<Company>>(`${this.apiGetById}/${companyCode}`);
  }

  updateCompany(companymodel: Company): Observable<Company> {
    return this.http.put<Company>(this.apiUpdate, companymodel);
  }
}
