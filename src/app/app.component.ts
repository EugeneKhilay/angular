import { Component } from '@angular/core';
import {ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  list = [];
  constructor(private api: ApiService) {}
  get() {
    this.api.get().subscribe((res: any) => {
      this.list = res;
    });
  }
  post() {
    const test = {title: 'Kekekekeke', description: 'Yaaaaa dudoseeeeeeeeeeer'};
    for (let i = 0; i < 100; i++) {
        this.api.post(test).subscribe((res: any) => {
            this.list.push(test);
        });
    }
  }
  del(id, index) {
      console.log(index);
      this.api.del(id).subscribe((res: any) => {
        this.list.splice(index, 1);
      });
  }
  update() {
  }
}
