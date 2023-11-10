import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mPowerEducation';
  showCourseAndPaymentTabs: boolean = true;

  constructor( private router: Router, private activatedRoute: ActivatedRoute){
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      debugger
      // Check the current route and set showCourseAndPaymentTabs accordingly
      this.showCourseAndPaymentTabs = !this.isHistoryRoute();
    });

}
isHistoryRoute(): boolean {
  return this.activatedRoute.snapshot.url.some(segment => segment.path === 'history');
}
}
