import {Component, OnInit} from '@angular/core';
import {delay} from 'rxjs/operators';
import {Todo, TodosService} from './todos.service';

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
})

export class MuaComponent implements OnInit {

  todos: Todo[] = [];
  todoTitle = '';
  loading = false;

  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
    this.fetchTodos();
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }

    this.todosService.addTodo({
      title: this.todoTitle,
      completed: false,
    }).subscribe(todo => {
      console.log('todo: ', todo);
      this.todos.push(todo);
      this.todoTitle = '';
    });
  }

  fetchTodos() {
    this.loading = true;
    this.todosService.fetchTodos()
      .subscribe(todos => {
        console.log(todos);
        this.todos = todos;
        this.loading = false;
      });
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(t => t.id !== id);
      });
  }
}

