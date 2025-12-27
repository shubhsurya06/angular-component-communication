import { Component, signal, inject, OnInit, ViewChild, AfterViewInit, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { FormsModule } from '@angular/forms';
import { NgSwitch, NgSwitchCase, NgClass } from '@angular/common';
import { ChildToParent } from './child-to-parent/child-to-parent';
import { ViewChildComponent } from './view-child/view-child';
import { ViewChildrenComp} from './view-children-comp/view-children-comp';
import { ContentProjection } from './content-projection/content-projection';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child, FormsModule, NgSwitch, NgSwitchCase, ChildToParent, NgClass, ViewChildComponent, ViewChildrenComp, ContentProjection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Angular21 App');

  activeTab = signal<'parent-to-child' | 'child-to-parent' | 'view-child-decorators' | 'view-children-decorators' | 'content-projection'>('parent-to-child');

  setTab(tab: 'parent-to-child' | 'child-to-parent' | 'view-child-decorators' | 'view-children-decorators' | 'content-projection') {
    this.activeTab.set(tab);
  }

  childTitle: string = 'Child Component Title from Parent';

  metersModel = signal<number>(0);

  personObject: any = {
    userName: 'John Doe',
    age: 30
  }

  parentItems = [
    {
      name: 'Shubham',
      age: 35
    },
    {
      name: 'New John',
      age: 25
    }
  ]

  outputData = signal<string>('');
  objOutputData = signal<any>({});

  @ViewChild('childRef') viewChildComponent!: ViewChildComponent;

  @ViewChildren('childrenRef') viewChildrenComponents!: ViewChildrenComp[];

  dynamicParaTag = signal<string>('');

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle() {
    this.childTitle = 'Sample Title Changed on click from Parent!';
  }

  incrementAge() {
    // this.personObject.age  = this.personObject.age + 1;

    this.personObject = {
      ...this.personObject,
      age: this.personObject.age + 1
    }
  }

  onClicked() {
    // this.parentItems.push({
    //   name: 'Added Name',
    //   age: 20
    // });
    this.parentItems = [
      ...this.parentItems, {
        name: 'Added Name',
        age: 20
      }
    ]
  }

  receiveData(childData: string) {
    console.log(childData);
    this.outputData.set(childData);
  }

  receiveObjData(childData: any) {
    console.log(childData);
    this.objOutputData.set(childData);
  }
  
  changeChildTitle() {
    this.viewChildComponent.title.set('Title changed from Parent Component');
  }

  accessChildMethod() {
    this.viewChildComponent.accessChildMethod('I am able to access child method');
  }

  changeChildrenTitle() {
    let counter = 1;
    for (const element of this.viewChildrenComponents) {
      element.title.set(`${element.title()} ${counter}`);
      counter++;
    }
  }

  accessChildrenMethod() {
    let counter = 1;
    for (const element of this.viewChildrenComponents) {
      element.accessChildrenMethod(`Children method title ${counter}`);
      counter++;
    } 
  }

  setDynamicParaTagEle() {
    this.dynamicParaTag.set('This is dynamic paragraph tag content set from Parent component method.');
  }

}
