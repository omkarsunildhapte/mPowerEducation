export interface UserForm {
    mobile: number;
    email: string;
    Motp: number;
    Eotp: number;
  }

  export interface FormData {
    c_firstName: string;
    c_lastName: string;
    F_name: string;
    M_name: string;
    dateOfBirth: string;
    annualIncome: string;
    B_SD: string;
    B_District: string;
    gender: string;
    AFC: string;
    mobileNumber: string;
    email: string;
    aadharNumber: string;
    Q_Exam: string;
    Q_Medium: string;
    Category: string;
    YOP_Qualifying: string;
    YOS_SSC: string;
    Place_SSC: string;
    YOS_Inter: string;
    Place_Inter: string;
    ClassesToOpt: string;
    dec_1: boolean;
    dec_2: boolean;
  }
  export interface TransactionHistory {
    date: Date;
    transactionId: string;
    transactionType: string;
    amount: number;
    paymentSource: string;
    status: string;
    invoice: string;
  }