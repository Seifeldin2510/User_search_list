import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersectionComponent } from './components/usersection/usersection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UsersectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'userlist';
}
