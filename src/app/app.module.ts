import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentMasterComponent } from './components/student-master/student-master.component';
import { HistoryModule } from './modules/history/history.module';
import { MainModule } from './modules/main/main.module';
import { HistoryHeaderComponent } from './components/history-header/history-header.component';
import { HistoryFooterComponent } from './components/history-footer/history-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentMasterComponent,
    HistoryHeaderComponent,
    HistoryFooterComponent,
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
