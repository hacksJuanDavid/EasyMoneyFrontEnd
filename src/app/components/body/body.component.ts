import { Component } from '@angular/core';
import { PersonalInformationComponent } from '../cruds/personal-information/personal-information.component';
import { WorkinInformationComponent } from '../cruds/workin-information/workin-information.component';
import { ReferenceComponent } from '../cruds/reference/reference.component';
import { CreditComponent } from '../cruds/credit/credit.component';
import { CreditLineComponent } from '../cruds/credit-line/credit-line.component';
import { ComponentLoaderService } from '../../services/service.loader.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [NgIf, PersonalInformationComponent, WorkinInformationComponent, ReferenceComponent, CreditComponent, CreditLineComponent],
  templateUrl: './body.component.html',
  styles: ``
})
export class BodyComponent {
  // State of the component for default
  componentToShow = 'personal-information';

  // Constructor to initialize the component
  constructor(private componentLoaderService: ComponentLoaderService) { }

  // Function to change the component
  ngOnInit(): void {
    this.componentLoaderService.currentComponent.subscribe(componentName => {
      this.componentToShow = componentName;
    });
  }
}
