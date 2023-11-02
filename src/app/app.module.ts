import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxTiptapModule } from 'ngx-tiptap';
import { EditorjsComponent } from './components/editorjs/editorjs.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTiptapModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
