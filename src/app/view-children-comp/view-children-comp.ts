import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-view-children-comp',
  imports: [],
  templateUrl: './view-children-comp.html',
  styleUrl: './view-children-comp.css',
})
export class ViewChildrenComp {

  title = signal<string>('Children Title');

  accessChildrenMethod(titleInput: string) {
    this.title.set(titleInput);
  }
}
