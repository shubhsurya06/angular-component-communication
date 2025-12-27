import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-to-parent',
  imports: [FormsModule],
  templateUrl: './child-to-parent.html',
  styleUrl: './child-to-parent.css',
})
export class ChildToParent {

  childInputValue = signal<string>('');

  inputValue = signal<string>('');

  @Output()
  sendEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  anotherEventEmitter: EventEmitter<any> = new EventEmitter<any>();

  emitValue() {
    this.sendEventEmitter.emit(this.childInputValue());
  }

  emitObjValue() {
    let obj = {
      title: this.inputValue()
    }
    this.anotherEventEmitter.emit(obj);
  }
}
