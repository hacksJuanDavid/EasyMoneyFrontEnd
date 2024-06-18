import { Component, OnInit } from '@angular/core';
import { BodyComponent } from '../body/body.component';
import { ComponentLoaderService } from '../../services/service.loader.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [BodyComponent],
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {
  // Constructor to initialize the component
  constructor(private componentLoaderService: ComponentLoaderService) { }

  // Function to change the component
  ngOnInit(): void {
  }

  // Function to load the component
  loadComponent(componentName: string) {
    this.componentLoaderService.changeComponent(componentName);
  }
}
