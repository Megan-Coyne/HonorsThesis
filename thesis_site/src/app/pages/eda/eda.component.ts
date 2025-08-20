import { Component } from '@angular/core';
import { NavButtonsComponent } from '../nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eda',
  imports: [NavButtonsComponent, CommonModule],
  templateUrl: './eda.component.html',
  styleUrl: './eda.component.css'
})
export class EdaComponent {
  openSection: number | null = null;

  toggleSection(section: number) {
    if (this.openSection === section) {
      this.openSection = null; // collapse if already open
    } else {
      this.openSection = section; // open clicked section
    }
  }

  modalImage: string | null = null;

  openModal(src: string) {
    this.modalImage = src;
  }

  closeModal() {
    this.modalImage = null;
  }
}
