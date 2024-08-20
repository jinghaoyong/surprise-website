import { Component, ViewChild } from '@angular/core';
import { SurpriseModalComponent } from '../../components/surprise-modal/surprise-modal.component';

@Component({
  selector: 'app-surprise-main-page',
  standalone: true,
  imports: [SurpriseModalComponent],
  templateUrl: './surprise-main-page.component.html',
  styleUrl: './surprise-main-page.component.scss'
})
export class SurpriseMainPageComponent {
  @ViewChild(SurpriseModalComponent) surpriseModal?: SurpriseModalComponent;
  ngOnInit(): void {
    setTimeout(() => {
      document.querySelector('.surprise-container')?.classList.add('show');
    }, 100); // Adjust the delay as needed

    setTimeout(() => {
      if (this.surpriseModal)
        this.surpriseModal.openModal();
    }, 0);
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
