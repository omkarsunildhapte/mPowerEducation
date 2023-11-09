import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HallticketComponent } from 'src/app/components/hallticket/hallticket.component';
import { PaymentResponseComponent } from 'src/app/components/payment-response/payment-response.component';
import { FirstScreenComponent } from 'src/app/components/first-screen/first-screen.component';
import { SecoundComponent } from 'src/app/components/secound/secound.component';
import { ThreeComponent } from 'src/app/components/three/three.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HallticketComponent,
    PaymentResponseComponent,
    FirstScreenComponent,
    SecoundComponent,
    ThreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MainModule { }
