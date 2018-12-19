import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  getTodoList() {
    return this.http.get('http://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=foods');
  }
}
