import { AfterViewInit, Component, ElementRef, Input, viewChild, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,KeyboardComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
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
