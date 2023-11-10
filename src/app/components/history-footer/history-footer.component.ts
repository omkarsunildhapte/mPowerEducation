import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-history-footer',
  templateUrl: './history-footer.component.html',
  styleUrls: ['./history-footer.component.css']
})
export class HistoryFooterComponent {
  showCourseAndPaymentTabs: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        debugger
        // Check the current route and set showCourseAndPaymentTabs accordingly
        this.showCourseAndPaymentTabs = !this.isHistoryRoute();
      });

  }
  isHistoryRoute(): boolean {
    return location.href.includes('history');
  }
}
