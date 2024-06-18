import { Component, OnInit } from '@angular/core';
import { getAllPersonalInformation, createPersonalInformation, updatePersonalInformation, deletePersonalInformation } from '../../../../api/personal.informatio.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './personal-information.component.html',
  styles: []
})
export class PersonalInformationComponent implements OnInit {
  // State for personal information
  personalInformations: any[] = [];
  // State for new personal information
  newPersonalInformation: any = {
    typeDocument: '',
    documentNumber: 0,
    name: '',
    lastName: '',
    residence: '',
    city: '',
    phone: ''
  };
  // State for selected personal information
  selectedPersonalInformation: any = {
    typeDocument: '',
    documentNumber: 0,
    name: '',
    lastName: '',
    residence: '',
    city: '',
    phone: ''
  };
  editMode: boolean = false; // Edit mode
  error: string | null = null; // Error state
  success: string | null = null; // Success state

  // On init, get all personal information
  ngOnInit() {
    this.getAllPersonalInformationService();
  }

  // Get all personal information
  getAllPersonalInformationService() {
    // Clear error and success
    this.error = null;
    this.success = null;
    // Get all personal information
    getAllPersonalInformation().then((data) => {
      this.personalInformations = data.map((info: any) => ({
        ...info,
        workingInformation: info.workingInformation || {},
        reference: info.reference || [],
        credit: info.credit || []
      }));
    }).catch(error => {
      this.error = 'Failed to load personal information. Please try again later.';
      console.error('Error fetching personal information:', error);
    });
  }

  // Create personal information
  createPersonalInformationService() {
    // Clear error and success
    this.error = null;
    this.success = null;
    // Create personal information
    createPersonalInformation(this.newPersonalInformation).then((data) => {
      this.personalInformations = [...this.personalInformations, data];
      this.newPersonalInformation = {
        typeDocument: '',
        documentNumber: 0,
        name: '',
        lastName: '',
        residence: '',
        city: '',
        phone: ''
      };
      // Set success message
      this.success = 'Personal information created successfully!';
    }).catch(error => {
      this.error = 'Failed to create personal information. Please try again later.';
      console.error('Error creating personal information:', error);
    });
  }

  // Update personal information
  updatePersonalInformationService() {
    // Get id of selected personal information
    const id = this.selectedPersonalInformation.id;
    if (!id) {
      this.error = 'No personal information selected for update.';
      return;
    }
    // Clear error and success
    this.error = null;
    this.success = null;
    // Update personal information
    updatePersonalInformation(id, this.selectedPersonalInformation).then((data) => {
      this.personalInformations = this.personalInformations.map((info) => {
        if (info.id === id) {
          return data;
        }
        return info;
      });
      this.selectedPersonalInformation = {
        typeDocument: '',
        documentNumber: 0,
        name: '',
        lastName: '',
        residence: '',
        city: '',
        phone: ''
      };
      // Set success message
      this.success = 'Personal information updated successfully!';
      this.editMode = false; // Exit edit mode
    }).catch(error => {
      this.error = 'Failed to update personal information. Please try again later.';
      console.error('Error updating personal information:', error);
    });
  }

  // Delete personal information
  deletePersonalInformationService(id: number) {
    // Clear error and success
    this.error = null;
    this.success = null;
    // Delete personal information
    deletePersonalInformation(id).then(() => {
      this.personalInformations = this.personalInformations.filter((info) => info.id !== id);
      // Set success message
      this.success = 'Personal information deleted successfully!';
    }).catch(error => {
      this.error = 'Failed to delete personal information. Please try again later.';
      console.error('Error deleting personal information:', error);
    });
  }

  // Select personal information for edit
  selectForEdit(info: any) {
    this.selectedPersonalInformation = { ...info };
    this.editMode = true;
    this.switchToEditTab();
  }

  // Switch to edit tab
  switchToEditTab() {
    const editTab = document.querySelector('input[aria-label="Edit"]') as HTMLInputElement;
    if (editTab) {
      editTab.checked = true;
    }
  }

  // Switch to get all tab
  switchToGetAllTab() {
    const getAllTab = document.querySelector('input[aria-label="Get All"]') as HTMLInputElement;
    if (getAllTab) {
      getAllTab.checked = true;
    }
  }

  // Cancel create
  cancelCreate() {
    this.newPersonalInformation = {
      typeDocument: '',
      documentNumber: 0,
      name: '',
      lastName: '',
      residence: '',
      city: '',
      phone: ''
    };
    this.switchToGetAllTab();
  }

  // Cancel edit
  cancelEdit() {
    this.selectedPersonalInformation = {
      typeDocument: '',
      documentNumber: 0,
      name: '',
      lastName: '',
      residence: '',
      city: '',
      phone: ''
    };
    this.editMode = false;
    this.switchToGetAllTab();
  }
}

