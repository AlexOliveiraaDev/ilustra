import { AfterViewInit, Component, ElementRef, Input, viewChild, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { FormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroCog8ToothSolid, heroChartBarSolid } from '@ng-icons/heroicons/solid'




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KeyboardComponent, FormsModule, NgIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [provideIcons({ heroCog8ToothSolid, heroChartBarSolid })]
})
export class AppComponent {
  @ViewChild("inputWord") inputWord!: ElementRef
  @ViewChild("tip1") tip1!: ElementRef
  @ViewChild("tip2") tip2!: ElementRef
  @ViewChild("tip3") tip3!: ElementRef
  @ViewChild("tip4") tip4!: ElementRef
  @ViewChild("tip5") tip5!: ElementRef

  @ViewChild("image1") image1!: ElementRef

  title = 'ilustra';
  value = "";

  inputKey(key: string) {
    this.inputWord.nativeElement.focus()
    if (key != "{enter}" && key != "{backspace}") {
      this.value += key
    }
    else if (key == "{backspace}") {
      this.value = this.value.slice(0, -1)
    }
    else {
      if (this.value.toUpperCase() == "GELO") {
        this.tip1.nativeElement.classList.add("correctTip")
        this.image1.nativeElement.hidden = false
        this.value = ""
        console.log("Enter!")
      }
      if (this.value.toUpperCase() == "NEVE") {
        this.tip2.nativeElement.classList.add("correctTip")
        this.value = ""
        console.log("Enter!")
      }
    }

  }

  onFocus(event: FocusEvent) {
    event.preventDefault();
  }

}
