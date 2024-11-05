import { Component, EventEmitter, Output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {heroBackspace} from '@ng-icons/heroicons/outline'


@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.scss',
  viewProviders: [provideIcons({heroBackspace})]
})
export class KeyboardComponent {
@Output() inputKeyboard = new EventEmitter<string>;

keyboardClicked(letter:string){
this.inputKeyboard.emit(letter)
}
}
