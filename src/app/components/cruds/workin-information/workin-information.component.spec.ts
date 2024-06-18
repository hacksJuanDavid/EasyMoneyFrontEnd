import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkinInformationComponent } from './workin-information.component';

describe('WorkinInformationComponent', () => {
  let component: WorkinInformationComponent;
  let fixture: ComponentFixture<WorkinInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkinInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkinInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
