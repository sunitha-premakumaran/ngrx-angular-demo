import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddTodo } from './store/app.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  newValue = '';
  array: Observable<{ todos: string[] }>;

  constructor(private store: Store<{ todoList: { todos: string[] } }>) { }


  ngOnInit() {
    this.array = this.store.select('todoList');
  }

  //Dispach the action
  pushValue() {
    console.log("Dispatch")
    this.store.dispatch(new AddTodo(this.newValue));
  }
}
