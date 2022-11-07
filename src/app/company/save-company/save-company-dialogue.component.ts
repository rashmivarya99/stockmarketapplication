import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Company } from '../company';
import { SaveCompanyComponent } from './save-company.component';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'save-company-dialogue',
  template: `<button mat-raised-button color="primary" (click)="openDialog()">
    <span *ngIf="companyObj.companyCode">Edit</span>
    <span *ngIf="!companyObj.companyCode">+ Add Company</span>
  </button>`,
})
export class SaveCompanyDialogue {
  constructor(public dialog: MatDialog) {}

  @Input() companyObj: Company = new Company();
  @Input() saveCompanyDetails: any;

  openDialog() {
    const dialogRef = this.dialog.open(SaveCompanyComponent, {
      data: {
        saveCompanyDetails: this.saveCompanyDetails,
        companyObj: this.companyObj,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
