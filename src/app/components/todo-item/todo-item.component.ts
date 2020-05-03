import { Todo } from './../../models/Todo';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TodoService } from '../../services/todo.service';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo:EventEmitter<Todo> = new EventEmitter();

  constructor( private todoService:TodoService ) { }

  ngOnInit(): void {
  }

  //set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  onToggle(todo) {
    // Toggle with UI
    todo.completed = !todo.completed;
    // Toggle on server
    this.todoService.toggleCompleted(todo)
    .subscribe( todo=> {
     console.log(todo);
  });
    
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

}
