import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styles: []
})
export class SampleComponent implements OnChanges, OnInit {
  @Input() dataFromParent: any;
  @Output() emitDataToParent = new EventEmitter<any>();
  input: string;
  ifLoaded = false;

  taskObservable: Observable<string>;
  
  constructor(private notificationService: NotificationService) { }

  send() {
    console.log('send --->');
    console.log('send 2------>');
    
    
    this.emitDataToParent.emit(this.input);
    this.input = '';
  }

  ngOnInit(): void {
    console.log('Component SampleComponent OnInit');
    
    if (this.ifLoaded) {
      // this code is only going to be run once
      if (this.dataFromParent) {
        console.log('dataFromParent',this.dataFromParent);
        this.notificationService.setData(this.dataFromParent);

        this.taskObservable = new Observable((observer) => {
          observer.next(this.dataFromParent.path);

        })
      }

      this.notificationService.notificationEvent().subscribe(res => {
        if (res) {
          this.emitDataToParent.emit(true);
        }
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.ifLoaded) {
      this.ifLoaded = true;
      this.ngOnInit();
    }
    // any code that needs to be run every time a change is made
  }
}
