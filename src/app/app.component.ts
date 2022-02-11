import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fronthogwarts';

  constructor() {
    localStorage.setItem('apiUrl', 'http://hp-api.herokuapp.com/api/characters');
  }
}
