import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryCheckService {
  private isHistoryRouteSource = new BehaviorSubject<boolean>(false);
  isHistoryRoute$ = this.isHistoryRouteSource.asObservable();

  updateIsHistoryRoute(value: boolean) {
    this.isHistoryRouteSource.next(value);
  }
}
