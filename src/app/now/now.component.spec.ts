import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowComponent } from './now.component';
import {AppComponent} from "../app.component";

describe('NowComponent', () => {
  let component: NowComponent;
  let fixture: ComponentFixture<NowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render time', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Il est ');
  });
});
