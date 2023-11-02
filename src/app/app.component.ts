import { Component, OnDestroy } from '@angular/core';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import BubbleMenu from '@tiptap/extension-bubble-menu'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'anguTipTap';
  editor = new Editor({
    extensions: [
      StarterKit,
      Highlight,
      Typography,
    ],
  });

  editorContent: string = 'Hello, ngx-tiptap!';

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
