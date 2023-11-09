import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentMasterComponent } from './components/student-master/student-master.component';
import { FirstScreenComponent } from './components/first-screen/first-screen.component';
import { HallticketComponent } from './components/hallticket/hallticket.component';
import { HistoryComponent } from './components/history/history.component';
import { PaymentResponseComponent } from './components/payment-response/payment-response.component';
import { SecoundComponent } from './components/secound/secound.component';
import { ThreeComponent } from './components/three/three.component';

const routes: Routes = [
  { path: '', redirectTo: "/student/first-screen", pathMatch: 'full' },
  { path: 'hallticket', component: HallticketComponent },
  {
    path: 'student', component: StudentMasterComponent, children: [
      { path: 'first-screen', component: FirstScreenComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'payment-response/:IsSuccess', component: PaymentResponseComponent },
      { path: 'secound', component: SecoundComponent },
      { path: 'three', component: ThreeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
