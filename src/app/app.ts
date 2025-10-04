import { Component, signal } from '@angular/core';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learnAngular');
  city = 'New York';
  isServerRuning = false;
}
