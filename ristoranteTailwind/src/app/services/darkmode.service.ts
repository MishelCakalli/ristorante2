import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
  darkModeSignal = signal<String>('null');

  updateDarkMode(){
    this.darkModeSignal.update((value)=>(value === "dark" ? "null" : "dark"))
  }

  constructor() { }
}
