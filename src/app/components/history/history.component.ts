import { Component } from '@angular/core';
import { TransactionHistory } from 'src/app/utils/interfaces';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  user = {
    userImage: "../../../assets/images/user_hallticket.png",
    userName: "John Doe",
    userId: "User ID: 12345",
    branchName: "Ayyapa Nagar Branch",
    academicYear: "2020-2022",
    admissionNumber: "162405",
    dob: "02/01/1999",
    fathersName: "Bhimsen",
    mothersName: "Shivani",
    mobileNumber: "+90 7093344561",
    emailID: "Test@test.com",
    course: "B.Sc- AAI",
    semester: "II"
  };
  transactions: TransactionHistory[] = [
    {
      date: new Date(),
      transactionId: '123',
      transactionType: 'Sale',
      amount: 100,
      paymentSource: 'Credit Card',
      status: 'Failed',
      invoice: 'INV001'
    },
    {
      date: new Date('2023-11-03'),
      transactionId: '123456',
      transactionType: 'Online Payment',
      amount: 250000,
      paymentSource: 'Credit Card',
      status: 'Success',
      invoice: 'INV002'
    },
    {
      date: new Date('2023-11-04'),
      transactionId: '12345',
      transactionType: 'Online Payment',
      amount: 2500,
      paymentSource: 'Mobile',
      status: 'Success',
      invoice: 'INV003'
    },
    {
      date: new Date('2023-11-05'),
      transactionId: '6789',
      transactionType: 'Online Payment',
      amount: 5000,
      paymentSource: 'Bank Transfer',
      status: 'Failed',
      invoice: 'INV004'
    }
  ];
  constructor() { }
  ngOnInit() {
    document.body.className = "background-bg-1";
  }


}
