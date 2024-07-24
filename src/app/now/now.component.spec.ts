import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NowComponent} from './now.component';
import {AppComponent} from "../app.component";
import {SolarService, SunPosition} from '../solar.service';
import {of} from "rxjs";

describe('NowComponent', () => {
  let component: NowComponent;
  let fixture: ComponentFixture<NowComponent>;
  let solarServiceStub: Partial<SolarService>;

  beforeEach(async () => {
    solarServiceStub = {
      findSunPositionAtEiffelTower: jasmine.createSpy('findSunPositionAtEiffelTower').and.returnValues(of(new SunPosition(new Date(2024, 6, 23, 41, 43))))
    };

    await TestBed.configureTestingModule({
      providers: [{provide: SolarService, useValue: solarServiceStub}],
      imports: [NowComponent]
    }).compileComponents();

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
    expect(compiled.querySelector('#clock')?.textContent).toContain('il est ');
  });

});
