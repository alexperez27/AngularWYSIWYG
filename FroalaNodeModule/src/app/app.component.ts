import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba Node Module';

  public editorContent: string = 'My Document\'s Title'

  public options: Object = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: true
  }

}
