import { Component } from '@angular/core';
import { getAllCreditLine } from '../../../../api/credit.line.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-credit-line',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './credit-line.component.html',
  styles: ``
})
export class CreditLineComponent {
  // State for the list of credit lines
  creditLines: any[] = [];
  error: string | null = null;

  // Lifecycle hook to initialize the data
  ngOnInit() {
    this.getAllCreditLinesService();
  }

  // Get all credit lines
  getAllCreditLinesService() {
    getAllCreditLine().then((data) => {
      this.creditLines = data;
    }).catch(error => {
      this.error = 'Failed to load credit lines. Please try again later.';
      console.error('Error fetching credit lines:', error);
    });
  }
}


