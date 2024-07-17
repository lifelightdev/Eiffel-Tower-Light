import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowComponent } from './now.component';
import {AppComponent} from "../app.component";
import { SolarService } from '../solar.service';
import { provideHttpClient } from '@angular/common/http';
import {HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('NowComponent', () => {
  let component: NowComponent;
  let fixture: ComponentFixture<NowComponent>;
  let service: SolarService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        SolarService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
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
    expect(compiled.querySelector('#clock')?.textContent).toContain('Il est ');
  });
});
