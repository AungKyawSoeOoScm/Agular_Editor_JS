import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorjsComponent } from './editorjs.component';

describe('EditorjsComponent', () => {
  let component: EditorjsComponent;
  let fixture: ComponentFixture<EditorjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorjsComponent]
    });
    fixture = TestBed.createComponent(EditorjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
