import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  index: any;
  card: any;
  cards: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.index = this.route.snapshot.params.index;
  }

  ngOnInit() {
    try {
      this.cards = JSON.parse(localStorage.getItem('cards'));
      // console.log(localStorage.getItem('card'));
      if (this.cards[this.index]) {
        this.card = this.cards[this.index];
      } else {
        this.router.navigate(['']);
      }
    } catch (error) {
      this.router.navigate(['']);
    }
  }

}
