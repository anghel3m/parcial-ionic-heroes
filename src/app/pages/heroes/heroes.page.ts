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
  IonLabel, IonButtons } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.page.html',
  styleUrls: ['./heroes.page.scss'],
  standalone: true,
  imports: [IonButtons, 
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
    { name: "Superman", power: "Fuerza sobrehumana" },
    { name: "Mujer Maravilla", power: "Combate y liderazgo" },
    { name: "Batman", power: "Inteligencia y tecnología" },
    { name: "Flash", power: "Súper velocidad" }
  ];

  constructor(private router: Router) {
    addIcons({ arrowBack });
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}