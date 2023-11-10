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
  isHistoryRoutes: boolean = true;
  showCourseAndPaymentTabs: boolean = true;

  constructor(private historyCheckService: HistoryCheckService, private router: Router) { }

  ngOnInit() {
    this.historyCheckService.isHistoryRoute$.subscribe(value => {
      this.isHistoryRoutes = value;
    });
  }

  navigateToFirstScreen() {
    this.router.navigate(['/student/first-screen']);
  }

  isHistoryRoute() {
    return location.href.includes('history');
  }

  navigateToPaymentResponse() {
    this.router.navigate(['/student/payment-response/1']);
  }

  navigateToHistory() {
    this.router.navigate(['/student/history']);
  }
}
