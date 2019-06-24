import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { TimeService } from './service/time.service';
import { LoggingService } from '../common/service/logging.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  currentTime: string;
  constructor(
    public timeService: TimeService,
    public loggingService: LoggingService) { }

  ngOnInit() {
    const oneSecondInterval = interval(1000);

    oneSecondInterval.pipe(
      take(10)
    ).subscribe(result => {
      this.loggingService.log(result);
      this.currentTime = this.timeService.getCurrentTime();
    });
  }

}
