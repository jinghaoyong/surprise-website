import { CommonModule, NgClass } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-surprise-modal',
  standalone: true,
  imports: [NgClass,CommonModule],
  templateUrl: './surprise-modal.component.html',
  styleUrl: './surprise-modal.component.scss'
})
export class SurpriseModalComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Initialize the modal after the view is initialized
    const modalElement = document.getElementById('staticBackdrop');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      (window as any).modalInstance = modal;  // Make sure modal instance is available globally
    }
  }

  openModal(): void {
    // Open the modal
    (window as any).modalInstance?.show();
  }

  closeModal(): void {
    // Close the modal
    (window as any).modalInstance?.hide();
  }
}