import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Keyboard from "simple-keyboard";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'ilustra';
  value = "";
  keyboard?: Keyboard;

ngAfterViewInit(): void {
  this.keyboard = new Keyboard({
    onChange: input => this.onChange(input),
    onKeyPress: button => this.onKeyPress(button)
})  
}
onKeyPress(button: string): any
{
  console.log("Button pressed", button);
    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();
}

  onChange(input: string): any {

    this.value = input;
  console.log("Input changed", input);
    
  }

  onInputChange = (event: any) => {
    this.keyboard?.setInput(event.target.value);
  };

  handleShift = () => {
    let currentLayout = this.keyboard?.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard?.setOptions({
      layoutName: shiftToggle
    });
  };
}
