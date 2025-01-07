import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [],
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.scss'
})
export class TutorialComponent {
  constructor(private appComponent: AppComponent) {}

  closeTutorial() {
    localStorage.setItem('showTutorial', 'false');
    this.appComponent.showTutorial = false;
  }
}
