import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-memo2',
  templateUrl: './memo2.component.html',
  styleUrls: ['./memo2.component.css']
})
export class Memo2Component implements OnInit {

  memo: any = {};
  memos: any = [];
  isSubmitted: Boolean = false;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    // if (localStorage.getItem('memos')) {
    //   this.memos = JSON.parse(localStorage.getItem('memos'));
    // }
    this.getMemos();
  }

  onSubmit(memoForm: NgForm) {
    this.isSubmitted = true;
    if (memoForm.valid) {
      this.httpService.post2('saveMemo.php', this.memo).subscribe((data) => {
        if (data.status === 1) {
          memoForm.resetForm();
          this.isSubmitted = false;
          this.getMemos();
        } else {
          alert('ไม่สามารถเชื่อมต่อข้อมูลได้เนื่องจาก ' + data.data);
        }
      });
    }
  }

  getMemos() {
    this.httpService.get2('getMemos.php').subscribe((data) => {
      console.log(data);
      if (data.status === 1) {
        this.memos = data.data;
      } else {
        alert('ไม่สามารถเชื่อมต่อข้อมูลได้เนื่องจาก ' + data.data);
      }
    });
  }

  removeMemo(id) {
    // this.memos.splice(index, 1);
    // localStorage.setItem('memos', JSON.stringify(this.memos));
    this.httpService.post2('deleteMemo.php', { id: id }).subscribe((data) => {
      if (data.status === 1) {
        this.getMemos();
      } else {
        alert('ไม่สามารถเชื่อมต่อข้อมูลได้เนื่องจาก ' + data.data);
      }
    });
  }

}
