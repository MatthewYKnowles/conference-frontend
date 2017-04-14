import { Component, OnInit } from '@angular/core';
import {SubmissionService} from '../services/submission.service';
import {Submission} from '../models/submission';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [SubmissionService]
})
export class ScheduleComponent implements OnInit {
  private submissions: any;

  constructor(private _submissionService: SubmissionService) {
    this._submissionService.getAllSubmissions().subscribe((submissions) => {
      this.submissions = submissions;
    });
  }
  ngOnInit() {
  }

}
