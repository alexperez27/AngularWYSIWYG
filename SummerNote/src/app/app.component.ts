import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  public editorContent: string = 'My Document\'s Title'

  ngOnInit(){
    (window as any).initSummerNote("#summernote",this.editorContent);
  }

  public leerDatos(){
    this.editorContent=(window as any).getSummerNoteContent("#summernote");
  }
}
