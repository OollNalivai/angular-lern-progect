import {Component, OnInit} from '@angular/core';
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
  error = '';

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
    })
      .subscribe(todo => {
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
        if (todos) {
          this.todos = todos;
        }
        this.loading = false;
      }, error => {
        this.error = error.message;
      });
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(t => t.id !== id);
      });
  }

  completeTodo(id: number) {
    this.todosService.completeTodo(id).subscribe(todo => {
      const todoEl = this.todos.find(t => t.id === todo.id);

      if (todoEl !== undefined) {
        todoEl.completed = true;
      }
    });
  }
}

