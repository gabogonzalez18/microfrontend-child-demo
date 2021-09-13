import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styles: []
})
export class SampleComponent implements OnChanges, OnInit {
  @Input() dataFromParent: string;
  @Output() emitDataToParent = new EventEmitter<string>();
  input: string;
  ifLoaded = false;
  constructor() { }

  send() {
    console.log('send --->');
    
    this.emitDataToParent.emit(this.input);
    this.input = '';
  }

  ngOnInit(): void {
    if (this.ifLoaded) {
      // this code is only going to be run once
      if (this.dataFromParent) {
        console.log(this.dataFromParent);
      }
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
