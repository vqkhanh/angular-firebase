import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-firebase';
  items: Observable<any[]>;
  // items: any;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('courses').valueChanges();

    // this.obs
    // .subscribe(x => {
      // this.items = x;
      // console.log(this.items)
    // })
   
    // db.list('/courses')
    // .sub
  }
}
