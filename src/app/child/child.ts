import { Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef, inject, DoCheck, Output, signal, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child implements OnInit, OnChanges {

  @Input()
  title: string = "Child Title";

  @Input()
  metersModelValue: number = 0;

  @Input()
  personInfo: any = {
    name: '',
    age: 0
  };

  @Input()
  items: any[] = [];

  cdr = inject(ChangeDetectorRef);

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child Component - ngOnChanges called:', changes);
    if (changes['metersModelValue'] && changes['metersModelValue'].currentValue) {
      this.metersModelValue = changes['metersModelValue'].currentValue * 100;
    } else {
      this.metersModelValue = 0;
    }
  }

  ngOnInit(): void {

    // setTimeout(() => {
    //   // this.cdr.detectChanges();
    //   console.log('Child Component - ngOnInit timeout executed after 10 seconds');
    //   this.cdr.markForCheck();
    // }, 10000);

  }
}
