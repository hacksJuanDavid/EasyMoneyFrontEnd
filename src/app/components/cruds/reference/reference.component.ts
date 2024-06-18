import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { getAllReference, createReference, updateReference, deleteReference } from '../../../../api/reference.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './reference.component.html',
  styles: ``
})
export class ReferenceComponent implements OnInit {
  // State for the list of references
  references: any[] = [];
  // State for the new reference
  newReference: any = {
    email: '',
    name: '',
    lastName: '',
    address: '',
    phone: '',
    city: '',
    relationship: '',
    typeReference: '',
    personalInformationId: 0
  };
  // State for selected reference
  selectedReference: any = {
    email: '',
    name: '',
    lastName: '',
    address: '',
    phone: '',
    city: '',
    relationship: '',
    typeReference: '',
    personalInformationId: 0
  };
  editMode: boolean = false; // Edit mode
  error: string | null = null; // Error state
  success: string | null = null; // Success state

  // Lifecycle hook to initialize the data
  ngOnInit() {
    this.getAllReferencesService();
  }

  // Get all references
  getAllReferencesService() {
    // Clear error and success
    this.error = null;
    this.success = null;
    // Get all references
    getAllReference().then((data) => {
      this.references = data;
    }).catch(error => {
      this.error = 'Failed to load references. Please try again later.';
      console.error('Error fetching references:', error);
    });
  }

  // Create a new reference 
  createReferenceService() {
    // Clear error and success
    this.error = null;
    this.success = null;
    // Create a new reference
    createReference(this.newReference).then((data) => {
      this.references = [...this.references, data];
      this.newReference = {
        email: '',
        name: '',
        lastName: '',
        address: '',
        phone: '',
        city: '',
        relationship: '',
        typeReference: '',
        personalInformationId: 0
      };
      // Set success message
      this.success = 'Reference created successfully!';
    }).catch(error => {
      this.error = 'Failed to create reference. Please try again later.';
      console.error('Error creating reference:', error);
    });
  }

  // Update reference
  updateReferenceService() {
    // Get id of selected working information
    const id = this.selectedReference.id;
    if (!id) {
      this.error = 'No reference selected.';
      return;
    }
    // Clear error and success
    this.error = null;
    this.success = null;
    // Update reference
    updateReference(id, this.selectedReference).then((data) => {
      this.references = this.references.map((info) => {
        if (info.id === id) {
          return data;
        }
        return info;
      });
      this.selectedReference = {
        email: '',
        name: '',
        lastName: '',
        address: '',
        phone: '',
        city: '',
        relationship: '',
        typeReference: '',
        personalInformationId: 0
      };
      // Set success message
      this.success = 'Reference updated successfully!';
      this.editMode = false; // Exit edit mode
    }).catch(error => {
      this.error = 'Failed to update reference. Please try again later.';
      console.error('Error updating reference:', error);
    });
  }

  // Delete reference
  deleteReferenceService(id: number) {
    // Clear error and success
    this.error = null;
    this.success = null;
    // Delete reference
    deleteReference(id).then(() => {
      this.references = this.references.filter((info) => info.id !== id);
      // Set success message
      this.success = 'Reference deleted successfully!';
    }).catch(error => {
      this.error = 'Failed to delete reference. Please try again later.';
      console.error('Error deleting reference:', error);
    });
  }

  // Set working information to edit
  selectForEdit(info: any) {
    this.selectedReference = { ...info };
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
    this.newReference = {
      email: '',
      name: '',
      lastName: '',
      address: '',
      phone: '',
      city: '',
      relationship: '',
      typeReference: '',
      personalInformationId: 0
    };
    this.switchToGetAllTab();
  }

  // Cancel edit
  cancelEdit() {
    this.selectedReference = {
      email: '',
      name: '',
      lastName: '',
      address: '',
      phone: '',
      city: '',
      relationship: '',
      typeReference: '',
      personalInformationId: 0
    };
    this.editMode = false;
    this.switchToGetAllTab();
  }
}
