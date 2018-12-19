import { TodoService } from './../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private todoList: any;
  carousel_items = [
    {
      img: 'assets/img/1.jpg',
      title: 'title 1',
      description: 'description 1'
    },
    {
      img: 'assets/img/2.jpg',
      title: 'title 2',
      description: 'description 2'
    },
    {
      img: 'assets/img/3.jpg',
      title: 'title 3',
      description: 'description 3'
    }
  ];

  cards = [

  ];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodoList().subscribe((res) => {
      this.todoList = res;
    });
    console.log(this.todoList);
  }
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
