import { AfterViewInit, Component, ElementRef, Input, viewChild, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { FormsModule } from '@angular/forms'; 
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {heroCog8ToothSolid,heroChartBarSolid} from '@ng-icons/heroicons/solid'




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,KeyboardComponent,FormsModule,NgIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [provideIcons({heroCog8ToothSolid,heroChartBarSolid})]
})
export class AppComponent{
  @ViewChild("inputWord") inputWord!: ElementRef

  title = 'ilustra';
  value = "";
 
  inputKey(key:string){
    this.inputWord.nativeElement.focus()
    if (key != "{enter}" && key != "{backspace}"){
      this.value +=key
    }
    else if (key == "{backspace}"){
      this.value =this.value.slice(0,-1)
    }
    else{
      console.log("Enter!")
    }
    
  }

  onFocus(event: FocusEvent) {
    event.preventDefault();
  }
  
}
