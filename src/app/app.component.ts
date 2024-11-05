import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeyboardComponent } from './components/keyboard/keyboard.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,KeyboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'ilustra';
  value = "";
 
  inputKey(key:string){
    console.log(key)
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
  
}
