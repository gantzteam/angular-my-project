import { TodoService } from './../services/todo.service';
import { HttpService } from './../services/http.service';
import {
  Component, OnChanges, OnInit,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

// import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges, OnInit,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
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

  counter = 0;
  name = '';
  constructor(private http: HttpService) {
    console.log(`constructor - counter is ${this.counter}`);
  } // private todoService: TodoService

  ngOnChanges() {
    console.log(`ngOnChange - counter is ${this.counter}`);
  }

  ngOnInit() {
    // this.todoService.getTodoList().subscribe((res) => {
    //   this.todoList = res;
    // });
    // console.log(this.todoList);
    console.log(`ngOnInit - counter is ${this.counter}`);
    $('#homeCarousel').carousel();
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.http.get('assets/card.json').subscribe((data) => {
      this.cards = data;
      localStorage.setItem('cards', JSON.stringify(data));
      // console.log(JSON.stringify(this.cards));
      console.log('ngAfterViewInit');
    });
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');

  }

  ngOnDestroy() {
    alert('Destroy method.');
  }

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
