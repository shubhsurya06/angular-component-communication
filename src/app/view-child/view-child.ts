import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-view-child',
  imports: [],
  templateUrl: './view-child.html',
  styleUrl: './view-child.css',
})
export class ViewChildComponent implements OnInit, AfterViewInit {

  @ViewChild('sample') element!: ElementRef;
  @ViewChild('changeTextColor') textElement!: ElementRef;

  title = signal<string>('Child Title');

  constructor() { 
    console.log('Focused input won\'t work in consructor as view is not initialized yet');
  }
  
  ngOnInit(): void {
    console.log('Focused input won\'t work in OnInit as view is not initialized yet');
  }

  ngAfterViewInit(): void {
    console.log('Focused input will work in AfterViewInit as view is initialized now');
    this.element.nativeElement.focus();

    this.textElement.nativeElement.style.color = 'blue';
  }

  accessChildMethod(titleInput: string) {
    // alert('Child method access from parent using ViewChild decorator!');
    this.title.set(titleInput);
  }


}
