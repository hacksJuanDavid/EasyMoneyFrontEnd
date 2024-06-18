import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ComponentLoaderService {
    // State of the component for default
    private componentSource = new BehaviorSubject<string>('personal-information');
    // Observable to get the current component
    currentComponent = this.componentSource.asObservable();

    // Constructor to initialize the component
    constructor() { }

    // Function to change the component
    changeComponent(componentName: string) {
        this.componentSource.next(componentName);
    }
}
