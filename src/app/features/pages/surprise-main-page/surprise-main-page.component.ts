import { Component, ViewChild } from '@angular/core';
import { SurpriseModalComponent } from '../../components/surprise-modal/surprise-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-surprise-main-page',
  standalone: true,
  imports: [SurpriseModalComponent, CommonModule],
  templateUrl: './surprise-main-page.component.html',
  styleUrl: './surprise-main-page.component.scss'
})
export class SurpriseMainPageComponent {
  @ViewChild(SurpriseModalComponent) surpriseModal?: SurpriseModalComponent;
  isBlurred = true;
  ngOnInit(): void {
    setTimeout(() => {
      document.querySelector('.surprise-container')?.classList.add('show');
    }, 100); // Adjust the delay as needed

    setTimeout(() => {
      if (this.surpriseModal)
        this.surpriseModal.openModal();
    }, 0);

    setTimeout(() => {
      this.isBlurred = false;
    }, 8000);  // 3000ms = 3 seconds
  }

  scrollToSectionTwo() {
    const element = document.querySelector('.section-two');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openModal() {
    if (this.surpriseModal)
      this.surpriseModal.openModal();
  }
}
