import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton, 
  IonIcon,
  ModalController, IonButtons } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';

@Component({
  selector: 'app-hero-image-modal',
  templateUrl: './hero-image-modal.component.html',
  styleUrls: ['./hero-image-modal.component.scss'],
  standalone: true,
  imports: [IonButtons, 
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonIcon
  ]
})
export class HeroImageModalComponent {
  @Input() hero: any;

  constructor(private modalCtrl: ModalController) {
    addIcons({ close });
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}