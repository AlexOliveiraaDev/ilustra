import { AfterViewInit, Component, ElementRef, Input, viewChild, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { FormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroCog8ToothSolid, heroChartBarSolid } from '@ng-icons/heroicons/solid'
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KeyboardComponent, FormsModule, NgIconComponent, TutorialComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [provideIcons({ heroCog8ToothSolid, heroChartBarSolid })]
})
export class AppComponent implements AfterViewInit {

  showTutorial = true;
  @ViewChild("inputWord") inputWord!: ElementRef
  @ViewChild("tip1") tip1!: ElementRef
  @ViewChild("tip2") tip2!: ElementRef
  @ViewChild("tip3") tip3!: ElementRef
  @ViewChild("tip4") tip4!: ElementRef
  @ViewChild("tip5") tip5!: ElementRef

  @ViewChild("image") image!: ElementRef

  title = 'ilustra';
  value = "";
  tips: ElementRef[] = []

  currentTip = 0;
ngAfterViewInit(){
  this.tips = [this.tip1, this.tip2, this.tip3, this.tip4, this.tip5]
}
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
if (input.toUpperCase() == "TUCANO"){
  this.tips[this.currentTip].nativeElement.classList.add("correctTip")
  this.finishGame()
  this.currentTip++
  return
}
console.log(this.currentTip)
this.updateImage()
this.value = ""
this.tips[this.currentTip].nativeElement.classList.add("incorrectTip")
this.image.nativeElement.hidden = false
this.currentTip++
}

updateImage(){
  this.image.nativeElement.src = `/assets/img1/img${this.currentTip}.png`
  this.image.nativeElement.hidden = false
}

finishGame(){
  this.image.nativeElement.hidden = false
  this.image.nativeElement.src = "/assets/img1/img4.png"
  this.tips[this.currentTip].nativeElement.classList.add("correctTip")
  this.value = ""
}

  onFocus(event: FocusEvent) {
    event.preventDefault();
  }

  closeTutorial() {
    this.showTutorial = false;
  }

}

