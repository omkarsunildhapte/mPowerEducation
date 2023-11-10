import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-master',
  templateUrl: './student-master.component.html',
  styleUrls: ['./student-master.component.css']
})
export class StudentMasterComponent {

  constructor(private activatedRoute: ActivatedRoute) { }
  isHistoryRoute(): boolean {
    return location.href.includes('history')
  }
}
