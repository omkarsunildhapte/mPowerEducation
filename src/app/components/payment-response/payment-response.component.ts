import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-response',
  templateUrl: './payment-response.component.html',
  styleUrls: ['./payment-response.component.css']
})
export class PaymentResponseComponent {
  constructor(private route: ActivatedRoute) { }
  IsSuccess: boolean = false;
  successData: {
    amount: string;
    transactionId: string;
  } = {
      amount: 'Rs.1.00',
      transactionId: 'SVU123445',
    };

  failureData: {
    amount: string;
    transactionId: string;
  } = {
      amount: 'Rs.120.00',
      transactionId: 'SVU123445',
    };
  download() {
    window.location.href = 'download.html';
  }
  goToHome() {
    window.location.href = 'home.html';
  }
  ngOnInit() {
    document.body.className = "background-bg-1";
    this.route.paramMap.subscribe((params1: any) => {
      if (params1.get('IsSuccess') == "1")
        this.IsSuccess = true;
      else
        this.IsSuccess = false;
    });
  }
}
