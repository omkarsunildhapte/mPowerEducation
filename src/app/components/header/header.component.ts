import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { HistoryCheckService } from 'src/app/history-check.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isHistoryRoute: boolean = true;

  constructor(private historyCheckService: HistoryCheckService) { }

  ngOnInit() {
    this.historyCheckService.isHistoryRoute$.subscribe(value => {
      this.isHistoryRoute = value;
      debugger
    });
  }
}
