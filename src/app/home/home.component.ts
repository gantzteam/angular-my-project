import { TodoService } from './../services/todo.service';
import { HttpService } from './../services/http.service';
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
      img: 'assets/img/pexels-photo-125532.jpeg',
      title: 'Architecture blur building escalator',
      description: 'https://www.pexels.com/photo/architecture-blur-building-escalator-125532/'
    },
    {
      img: 'assets/img/pexels-photo-91103.jpeg',
      title: 'Flowers garden nature tulips',
      description: 'https://www.pexels.com/photo/flowers-garden-nature-tulips-91103/'
    },
    {
      img: 'assets/img/pexels-photo-682487.jpeg',
      title: 'Gray Field during Sunset',
      description: 'https://www.pexels.com/photo/gray-field-during-sunset-682487/'
    }
  ];

  cards: any;

  constructor(private http: HttpService) { } // private todoService: TodoService

  ngOnInit() {
    // this.todoService.getTodoList().subscribe((res) => {
    //   this.todoList = res;
    // });
    // console.log(this.todoList);

    this.http.get('assets/card.json').subscribe((data) => {
      this.cards = data;
      localStorage.setItem('cards', JSON.stringify(data));
      // console.log(JSON.stringify(this.cards));
    });
  }
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
