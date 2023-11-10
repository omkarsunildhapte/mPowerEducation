import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HallticketComponent } from 'src/app/components/hallticket/hallticket.component';
import { PaymentResponseComponent } from 'src/app/components/payment-response/payment-response.component';
import { FirstScreenComponent } from 'src/app/components/first-screen/first-screen.component';
import { SecoundComponent } from 'src/app/components/secound/secound.component';
import { ThreeComponent } from 'src/app/components/three/three.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  declarations: [
    HallticketComponent,
    PaymentResponseComponent,
    FirstScreenComponent,
    SecoundComponent,
    ThreeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class MainModule { }
