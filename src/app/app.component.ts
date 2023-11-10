import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { HistoryCheckService } from './history-check.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showCourseAndPaymentTabs: boolean = true;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private historyCheckService: HistoryCheckService) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        debugger
        // Check the current route and set showCourseAndPaymentTabs accordingly
        this.showCourseAndPaymentTabs = !this.isHistoryRoute();
      });

  }
  isHistoryRoute(): boolean {
    return location.href.includes('history')
  }
  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const isHistoryRoute = this.checkIfHistoryRoute(this.router.routerState.root);
      this.historyCheckService.updateIsHistoryRoute(!isHistoryRoute);
    });
  }

  private checkIfHistoryRoute(route: ActivatedRoute): boolean {
    if (route.firstChild) {
      return this.checkIfHistoryRoute(route.firstChild);
    } else {
      return route.snapshot.url[0]?.path === 'history';
    }
  }
}
