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

  it ('should date is in summer', () => {
    let summer = new Date(2024,6,14); // 14 Juillet 2024
    expect(component.isSummer(summer)).toBeTrue();
    summer = new Date(2024,5,21); // 21 Juin 2024
    expect(component.isSummer(summer)).toBeTrue();
    summer = new Date(2024,8,20); // 20 Septembre 2024
    expect(component.isSummer(summer)).toBeTrue();
  })

  it ('should date is not in summer', () => {
    let notSummer = new Date(2024,11,25); // 25 Décembre 2024
    expect(component.isSummer(notSummer)).toBeFalsy();
    notSummer = new Date(2024,5,20); // 20 Juin 2024
    expect(component.isSummer(notSummer)).toBeFalsy();
    notSummer = new Date(2024,8,21); // 21 Septembre 2024
    expect(component.isSummer(notSummer)).toBeFalsy();
  })
});
