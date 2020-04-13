import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddTodo, DeleteTodo } from './store/app.actions';
import { Observable } from 'rxjs';
import { TodoState } from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  newValue = '';
  array: Observable<TodoState>;

  constructor(private store: Store<{ todoList: TodoState }>) { }


  ngOnInit() {
    //Observable for the key todoList, subscribed value using async pipe in component template
    this.array = this.store.select('todoList');
  }

  //Dispach add action
  pushValue() {
    this.store.dispatch(new AddTodo(this.newValue));
    this.newValue = '';
  }

  //Dispatch delete action
  delete(index: number) {
    this.store.dispatch(new DeleteTodo(index));
  }
}
