import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showCourseAndPaymentTabs: boolean = true;

  constructor( private router: Router, private activatedRoute: ActivatedRoute){
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      // Check the current route and set showCourseAndPaymentTabs accordingly
      this.showCourseAndPaymentTabs = !this.isHistoryRoute();
    });

}
isHistoryRoute(): boolean {
  return this.activatedRoute.snapshot.url.some(segment => segment.path === 'history');
}
}
