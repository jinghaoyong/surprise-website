import { CommonModule, NgClass } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-surprise-modal',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './surprise-modal.component.html',
  styleUrl: './surprise-modal.component.scss'
})
export class SurpriseModalComponent implements AfterViewInit {
  countdownValue: number = 8; // Start countdown at 8 seconds
  audio = new Audio('assets/bdayvoice.mp3');  // Load the MP3 file
  isOpened = false; // Initial state (closed)
  showGift: boolean = false

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    const countdownElement = document.getElementById('countdownTimer');
    const surpriseMessage = document.getElementById('surpriseMessage');
    const giftBox = document.getElementById('giftBox');

    const countdownInterval = setInterval(() => {
      if (this.countdownValue > 0) {
        this.countdownValue--;
        if (countdownElement) countdownElement.innerHTML = this.countdownValue.toString();
      } else {
        this.showGift = true;
        clearInterval(countdownInterval);

        // Show the gift box and change the message
        if (surpriseMessage) {
          surpriseMessage.innerHTML = '🎉 Surprise! Click the gift! 🎉';
        }
        if (giftBox) {
          giftBox.hidden = false;
        }

        // // Attach event listener to gift box for click
        // const giftBoxImage = document.getElementById('giftBoxImage');
        // if (giftBoxImage) {
        //   giftBoxImage.addEventListener('click', () => {
        //     this.playAudio();
        //     this.closeModal();
        //   });
        // }
      }
    }, 1000); // Decrease countdown every second
  }

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

  playAudio() {
    this.audio.loop = true;  // Enable looping of the audio
    this.audio.play().catch(error => {
      console.error('Audio playback failed:', error);
    });
  }

  stopAudio() {
    this.audio.loop = false;  // Disable looping
    this.audio.pause();  // Pause the audio
    this.audio.currentTime = 0;  // Reset to the beginning
  }

  toggleGift(): void {
    this.isOpened = !this.isOpened; // Toggle between opened and closed
    this.playAudio();
    this.closeModal();
  }
}