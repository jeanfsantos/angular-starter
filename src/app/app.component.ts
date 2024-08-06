import { Component, inject, OnInit } from '@angular/core';
import { Todo, TodoService } from './todo.service';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private todoService = inject(TodoService);


  ngOnInit(): void {

  }
}
