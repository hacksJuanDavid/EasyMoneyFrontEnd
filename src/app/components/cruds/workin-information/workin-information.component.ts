import { Component, OnInit } from '@angular/core';
import { getAllWorkingInformation, createWorkingInformation, updateWorkingInformation, deleteWorkingInformation } from '../../../../api/working.information.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-workin-information',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './workin-information.component.html',
  styles: ``
})
export class WorkinInformationComponent implements OnInit {
  // State for the list of working information
  workingInformations: any[] = [];
  // State for the new working information
  newWorkingInformation: any = {
    nitCompany: 0,
    nameCompany: '',
    address: '',
    phone: '',
    position: '',
    salary: 0,
    dateAdmission: '',
    personalInformationId: 0
  };
  // State for selected working information
  selectedWorkingInformation: any = {
    nitCompany: 0,
    nameCompany: '',
    address: '',
    phone: '',
    position: '',
    salary: 0,
    dateAdmission: '',
    personalInformationId: 0
  };
  editMode: boolean = false; // Edit mode
  error: string | null = null; // Error state
  success: string | null = null; // Success state

  // On init, get all working information
  ngOnInit() {
    this.getAllWorkingInformationService();
  }

  // Get all working information
  getAllWorkingInformationService() {
    // Clear error and success
    this.error = null;
    this.success = null;
    // Get all working information
    getAllWorkingInformation().then((data) => {
      this.workingInformations = data;
    }).catch(error => {
      this.error = 'Failed to load working information. Please try again later.';
      console.error('Error fetching working information:', error);
    });
  }

  // Create a new working information
  createWorkingInformationService() {
    // Clear error and success
    this.error = null;
    this.success = null;
    // Create new working information
    createWorkingInformation(this.newWorkingInformation).then((data) => {
      this.workingInformations = [...this.workingInformations, data];
      this.newWorkingInformation = {
        nitCompany: 0,
        nameCompany: '',
        address: '',
        phone: '',
        position: '',
        salary: 0,
        dateAdmission: '',
        personalInformationId: 0
      };
      // Set success message
      this.success = 'Working information created successfully.';
    }).catch(error => {
      this.error = 'Failed to create working information. Please try again later.';
      console.error('Error creating working information:', error);
    });
  }

  // Update working information
  updateWorkingInformationService() {
    // Get id of selected working information
    const id = this.selectedWorkingInformation.id;
    if (!id) {
      this.error = 'No working information selected.';
      return;
    }
    // Clear error and success
    this.error = null;
    this.success = null;
    // Convert dateAdmission to "yyyy-MM-dd" format
    this.selectedWorkingInformation.dateAdmission = this.formatDate(this.selectedWorkingInformation.dateAdmission);
    // Update working information
    updateWorkingInformation(id, this.selectedWorkingInformation).then((data) => {
      this.workingInformations = this.workingInformations.map((info) => {
        if (info.id === id) {
          return data;
        }
        return info;
      });
      this.selectedWorkingInformation = {
        nitCompany: 0,
        nameCompany: '',
        address: '',
        phone: '',
        position: '',
        salary: 0,
        dateAdmission: '',
        personalInformationId: 0
      };
      // Set success message
      this.success = 'Working information updated successfully.';
      this.editMode = false; // Exit edit mode
    }).catch(error => {
      this.error = 'Failed to update working information. Please try again later.';
      console.error('Error updating working information:', error);
    });
  }

  // Delete working information
  deleteWorkingInformationService(id: number) {
    // Clear error and success
    this.error = null;
    this.success = null;
    // Delete working information
    deleteWorkingInformation(id).then(() => {
      this.workingInformations = this.workingInformations.filter((info) => info.id !== id);
      // Set success message
      this.success = 'Working information deleted successfully.';
    }).catch(error => {
      this.error = 'Failed to delete working information. Please try again later.';
      console.error('Error deleting working information:', error);
    });
  }

  // Helper function to format date to "yyyy-MM-dd"
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0'); // January is 0!
    const day = `${date.getDate()}`.padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  // Set working information to edit
  selectForEdit(info: any) {
    this.selectedWorkingInformation = { ...info };
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
    this.newWorkingInformation = {
      nitCompany: 0,
      nameCompany: '',
      address: '',
      phone: '',
      position: '',
      salary: 0,
      dateAdmission: '',
      personalInformationId: 0
    };
    this.switchToGetAllTab();
  }

  // Cancel edit
  cancelEdit() {
    this.newWorkingInformation = {
      nitCompany: 0,
      nameCompany: '',
      address: '',
      phone: '',
      position: '',
      salary: 0,
      dateAdmission: '',
      personalInformationId: 0
    };
    this.editMode = false;
    this.switchToGetAllTab();
  }
}
