import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonLabel, 
  IonButtons,
  ModalController // Nuevo import
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { HeroImageModalComponent } from '../../components/hero-image-modal/hero-image-modal.component'; // Nuevo import

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.page.html',
  styleUrls: ['./heroes.page.scss'],
  standalone: true,
  imports: [
    IonButtons, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar,
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
    CommonModule, 
    FormsModule
  ]
})
export class HeroesPage {
 heroes = [
  { 
    name: "Superman", 
    power: "Fuerza sobrehumana",
    image: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png"
  },
  { 
    name: "Mujer Maravilla", 
    power: "Combate y liderazgo",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Wonder_Woman.jpg"
  },
  { 
    name: "Batman", 
    power: "Inteligencia y tecnología",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg"
  },
  { 
    name: "Flash", 
    power: "Súper velocidad",
    image: "https://upload.wikimedia.org/wikipedia/en/6/6c/Flash_DC_Comics.png"
  }
];

  constructor(
    private router: Router,
    private modalCtrl: ModalController // Inyectar ModalController
  ) {
    addIcons({ arrowBack });
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  //función para mostrar el modal
  async showHeroImage(hero: any) {
    const modal = await this.modalCtrl.create({
      component: HeroImageModalComponent,
      componentProps: {
        hero: hero
      },
      cssClass: 'auto-height'
    });
    await modal.present();
  }
}