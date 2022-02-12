import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelevantSkillsComponent } from './relevant-skills.component';

describe('RelevantSkillsComponent', () => {
  let component: RelevantSkillsComponent;
  let fixture: ComponentFixture<RelevantSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelevantSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelevantSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
