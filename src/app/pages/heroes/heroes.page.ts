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
  ModalController 
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
    image: "https://www.lanacion.com.ar/resizer/v2/la-inteligencia-artificial-genero-algunas-7P36CDRIIJH5HH4ERTMGDFIXPE.jpg?auth=401963cf7174f4cc6133ed22c02c43ddefa89231815b03193225f1eb89ba040f&width=880&height=586&quality=70&smart=true"
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
  },
  {
    name: "Iron Man",
    power: "Armadura avanzada y genio inventor",
    image: "https://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg"
  },
  {
    name: "Spider-Man",
    power: "Sentido arácnido y agilidad",
    image: "https://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg"
  },
  {
    name: "Capitán América",
    power: "Fuerza mejorada y escudo invencible",
    image: "https://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087.jpg"
  },
  {
    name: "Thor",
    power: "Dios del trueno y Mjölnir",
    image: "https://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350.jpg"
  },
  {
    name: "Hulk",
    power: "Fuerza ilimitada con ira",
    image: "https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0.jpg"
  },
  {
    name: "Black Widow",
    power: "Espionaje y combate cuerpo a cuerpo",
    image: "https://i.annihil.us/u/prod/marvel/i/mg/f/30/50fecad1f395b.jpg"
  },
  {
    name: "Doctor Strange",
    power: "Hechicería y manipulación del tiempo",
    image: "https://i.annihil.us/u/prod/marvel/i/mg/5/f0/5261a85a501fe.jpg"
  },
  {
    name: "Pantera Negra",
    power: "Tecnología y agilidad felina",
    image: "https://i.annihil.us/u/prod/marvel/i/mg/6/60/5261a80a67e7d.jpg"
  },
  {
    name: "Capitana Marvel",
    power: "Energía cósmica y vuelo",
    image: "https://i.annihil.us/u/prod/marvel/i/mg/c/10/537ba5ff07aa4.jpg"
  },
  {
    name: "Ant-Man",
    power: "Cambio de tamaño y comunicación con insectos",
    image: "https://i.annihil.us/u/prod/marvel/i/mg/6/90/537bc6ae8a5b7.jpg"
  }
];


  constructor(
    private router: Router,
    private modalCtrl: ModalController 
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