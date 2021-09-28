import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module2',
  templateUrl: './module2.component.html',
  styleUrls: ['./module2.component.scss']
})
export class Module2Component implements OnInit {

  inputs: any;

  constructor(private notificationService: NotificationService) {
    console.log("constructor(): Module2Component");
   }

  ngOnInit(): void {
    console.log("ngOnInit(): Module2Component");
    this.inputs = this.notificationService.getData();
  }

  next() {
    this.notificationService.nextNotification(true);
  }

  return() {
    this.notificationService.nextNotification({next: this.inputs.return});
  }

}
