import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module3',
  templateUrl: './module3.component.html',
  styleUrls: ['./module3.component.scss']
})
export class Module3Component implements OnInit {

  inputs: any;
  
  constructor(private notificationService: NotificationService) {
    console.log("constructor(): Module3Component");
    this.inputs = this.notificationService.getData();
   }

  ngOnInit(): void {
    console.log("ngOnInit(): Module3Component");
  }
  
  next() {
    this.notificationService.nextNotification(true);
  }

  return() {
    this.notificationService.nextNotification({next: this.inputs.return});
  }

}
