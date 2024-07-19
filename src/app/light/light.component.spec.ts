import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightComponent } from './light.component';

describe('LightComponent', () => {
  let component: LightComponent;
  let fixture: ComponentFixture<LightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
