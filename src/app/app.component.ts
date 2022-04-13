import { Component,ViewChild, AfterViewInit, OnInit, ViewEncapsulation } from '@angular/core';
import { KanbanComponent } from 'smart-webcomponents-angular/kanban';
import { GetKanbanData } from '../../common/data';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit, OnInit {

  @ViewChild('kanban', { read: KanbanComponent, static: false }) kanban: KanbanComponent;

  constructor() {}

  collapsible = true;
  dataSource = GetKanbanData();
  columns = [
    { label: 'To do', dataField: 'toDo' },
    { label: 'In progress', dataField: 'inProgress' },
    { label: 'Testing', dataField: 'testing' },
    { label: 'Done', dataField: 'done' }
  ];

  ngOnInit(): void {
    // onInit code.
  }

  ngAfterViewInit(): void {
    // afterViewInit code.
    this.init();
  }

  init(): void {
    // init code.



  }
}
