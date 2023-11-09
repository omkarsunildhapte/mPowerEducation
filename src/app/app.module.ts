import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './modules/main/main.module';
import { HistoryModule } from './modules/history/history.module';
import { StudentMasterComponent } from './components/student-master/student-master.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentMasterComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    HistoryModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
