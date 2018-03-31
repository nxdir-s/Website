import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
