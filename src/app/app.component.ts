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
  @ViewChild("image2") image2!: ElementRef
  @ViewChild("image3") image3!: ElementRef
  @ViewChild("image4") image4!: ElementRef
  @ViewChild("image5") image5!: ElementRef

  title = 'ilustra';
  value = "";

  tips = [this.tip1, this.tip2, this.tip3, this.tip4, this.tip5]
  images = [this.image1, this.image2, this.image3, this.image4, this.image5]

  currentTip = 0;

  inputKey(key: string) {
    this.inputWord.nativeElement.focus()
    if(key == "{enter}"){
      this.validateInput(this.value)
      return
    }

    if(key == "{backspace}"){
      this.value = this.value.slice(0, -1)
      return
    }

    this.value += key
  }

validateInput(input: string){
  console.log(input)
if (input.toUpperCase() == "GELO"){
  this.tips[this.currentTip].nativeElement.classList.add("correctTip")
  this.currentTip++
  this.images[this.currentTip].nativeElement.hidden = false
  this.value = ""
  return
}
this.tips[this.currentTip].nativeElement.classList.add("incorrectTip")
this.images[this.currentTip].nativeElement.hidden = false
this.currentTip++


}

  onFocus(event: FocusEvent) {
    event.preventDefault();
  }

}

