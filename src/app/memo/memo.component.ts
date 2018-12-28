import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {
  memo = {};
  memos = [];
  memoForm: FormGroup;
  isSubmitted: Boolean = false;

  constructor() {
    this.memoForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
      detail: new FormControl('', Validators.maxLength(50))
    });
  }

  ngOnInit() {
    this.memos = JSON.parse(localStorage.getItem('memos'));
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.memoForm.valid) {
      this.memo = {
        title: this.memoForm.controls.title.value,
        detail: this.memoForm.controls.detail.value
      };
      this.memos.push(this.memo);
      this.memoForm.reset();
      this.isSubmitted = false;
      localStorage.setItem('memos', JSON.stringify(this.memos));
    }

  }

}
