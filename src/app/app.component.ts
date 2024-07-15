import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NowComponent} from "./now/now.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Eiffel-Tower-Light';
}
