import { Component, inject } from '@angular/core';
import { DarkmodeService } from './services/darkmode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ristoranteTailwind';

  darkModeSrvice: DarkmodeService = inject(DarkmodeService);
}
