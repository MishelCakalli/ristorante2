import { Component, inject } from '@angular/core';
import { DarkmodeService } from 'src/app/services/darkmode.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  darkModeService: DarkmodeService = inject(DarkmodeService);

  toggleDarkMode(){
    this.darkModeService.updateDarkMode();
  }
}
