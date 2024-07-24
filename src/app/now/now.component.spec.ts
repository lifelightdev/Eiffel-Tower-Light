import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NowComponent} from './now.component';
import {AppComponent} from "../app.component";
import {SolarService} from '../solar.service';
import {of} from "rxjs";
import {SunPosition} from '../sun-position';

describe('NowComponent', () => {
  let component: NowComponent;
  let fixture: ComponentFixture<NowComponent>;
  let solarServiceStub: Partial<SolarService>;

  beforeEach(async () => {
    const sunsetDate = of(new SunPosition(new Date(2024, 6, 23, 21, 44)));
    solarServiceStub = {
      findSunPositionAtEiffelTower: jasmine.createSpy('findSunPositionAtEiffelTower').and.returnValue(sunsetDate)
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

  it('should render date and time now', () => {
    const dateNow = new Date(2024, 6, 14, 18, 0)
    jasmine.clock().mockDate(dateNow); // Il est 18h00 le 14 juillet 2024
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const result = dateNow.toLocaleDateString("en", {weekday: "long"}) + ' ' +
      dateNow.getDate() + ' ' +
      dateNow.toLocaleString("en", {month: "long"}) + ' ' +
      dateNow.getFullYear() + ' et il est ' +
      dateNow.getHours() + 'h' +
      dateNow.getMinutes();
    expect(compiled.querySelector('#clock')?.textContent).toContain('Nous sommes le ' + result);
  });

  it('should render time of sunset in the Eiffel tower', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#sunset')?.textContent).toContain('Aujourd\'hui le soleil se couche à 21h44 sur la tour Eiffel');
  });

});
