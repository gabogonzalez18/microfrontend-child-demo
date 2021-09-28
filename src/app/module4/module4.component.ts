import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module4',
  templateUrl: './module4.component.html',
  styleUrls: ['./module4.component.scss']
})
export class Module4Component implements OnInit {

  inputs: any;

  constructor(private notificationService: NotificationService) {
    console.log("constructor(): Module4Component");
   }

  ngOnInit(): void {
    console.log("ngOnInit(): Module4Component");
    this.inputs = this.notificationService.getData();
  }
  
  next() {
    this.notificationService.nextNotification(true);
  }

  return() {
    this.notificationService.nextNotification({next: this.inputs.return});
  }
}
