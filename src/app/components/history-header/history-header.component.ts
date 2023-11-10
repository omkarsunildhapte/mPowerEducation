import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-history-header',
  templateUrl: './history-header.component.html',
  styleUrls: ['./history-header.component.css']
})
export class HistoryHeaderComponent {
  showCourseAndPaymentTabs: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        debugger
        // Check the current route and set showCourseAndPaymentTabs accordingly
        this.showCourseAndPaymentTabs = this.isHistoryRoute();
      });

  }
  isHistoryRoute(): boolean {
    return location.href.includes('history');
  }
}
