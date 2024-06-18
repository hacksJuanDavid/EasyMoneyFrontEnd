import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { getAllCredit, createCredit, updateCredit, deleteCredit } from '../../../../api/credit.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-credit',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './credit.component.html',
  styles: ``
})
export class CreditComponent implements OnInit {
  // State for the list of credits
  credits: any[] = [];
  // State for new credit
  newCredit: any = {
    lineCredit: '',
    creditAmount: 0,
    creditTerm: '',
    description: '',
    personalInformationId: 0
  };
  // State for selected credit
  selectedCredit: any = {
    lineCredit: '',
    creditAmount: 0,
    creditTerm: '',
    description: '',
    personalInformationId: 0
  };
  editMode: boolean = false; // Edit mode
  error: string | null = null; // Error state
  success: string | null = null; // Success state

  // Lifecycle hook to initialize the data
  ngOnInit() {
    this.getAllCreditsService();
  }

  // Get all credits
  getAllCreditsService() {
    // Clear error and success
    this.error = null;
    this.success = null;
    // Get all credits
    getAllCredit().then((data) => {
      this.credits = data;
    }).catch(error => {
      this.error = 'Failed to load credits. Please try again later.';
      console.error('Error fetching credits:', error);
    });
  }

  // Create a new credit
  createCredit() {
    // Clear error and success
    this.error = null;
    this.success = null;
    // Create a new credit
    createCredit(this.newCredit).then((data) => {
      this.credits = [...this.credits, data];
      this.newCredit = {
        lineCredit: '',
        creditAmount: 0,
        creditTerm: '',
        description: '',
        personalInformationId: 0
      };
      // Set success message
      this.success = 'Credit created successfully';
    }).catch(error => {
      this.error = 'Failed to create credit. Please try again later.';
      console.error('Error creating credit:', error);
    });
  }

  // Update credit
  updateCredit() {
    // Get id of selected personal information
    const id = this.selectedCredit.id;
    if (!id) {
      this.error = 'No personal information selected for update.';
      return;
    }
    // Clear error and success
    this.error = null;
    this.success = null;
    // Update personal information
    updateCredit(id, this.selectedCredit).then((data) => {
      this.credits = this.credits.map((info) => {
        if (info.id === id) {
          return data;
        }
        return info;
      });
      this.selectedCredit = {
        lineCredit: '',
        creditAmount: 0,
        creditTerm: '',
        description: '',
        personalInformationId: 0
      };
      // Set success message
      this.success = 'Credit information updated successfully!';
      this.editMode = false; // Exit edit mode
    }).catch(error => {
      this.error = 'Failed to update credit information. Please try again later.';
      console.error('Error updating credit information:', error);
    });
  }

  // Delete credit  
  deleteCredit(id: number) {
    // Clear error and success
    this.error = null;
    this.success = null;
    // Delete credit
    deleteCredit(id).then(() => {
      this.credits = this.credits.filter((info) => info.id !== id);
      // Set success message
      this.success = 'Credit deleted successfully!';
    }).catch(error => {
      this.error = 'Failed to delete credit. Please try again later.';
      console.error('Error deleting credit:', error);
    });
  }

  // Select personal information for edit
  selectForEdit(info: any) {
    this.selectedCredit = { ...info };
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
    this.newCredit = {
      lineCredit: '',
      creditAmount: 0,
      creditTerm: '',
      description: '',
      personalInformationId: 0
    };
    this.switchToGetAllTab();
  }

  // Cancel edit
  cancelEdit() {
    this.selectedCredit = {
      lineCredit: '',
      creditAmount: 0,
      creditTerm: '',
      description: '',
      personalInformationId: 0
    };
    this.editMode = false;
    this.switchToGetAllTab();
  }
}
