import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Company } from '../company';

@Component({
  selector: 'app-save-company',
  templateUrl: './save-company.component.html',
  styleUrls: ['./save-company.component.css'],
})
export class SaveCompanyComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { saveCompanyDetails: any; companyObj: Company }
  ) {
    console.log(data);
    this.saveCompanyDetails = data.saveCompanyDetails;
    this.companyObj = data.companyObj;
  }

  companyObj: Company = new Company();
  saveCompanyDetails: any;

  ngOnInit(): void {}
}
