import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'management-tool';
  isCreating = false;

  toggleCreating(value: boolean) {
    this.isCreating = value;
  }

  addItem(newItem: { color: string, name: string, createDate: string, lastUpdate: string, createdBy: string }) {
    console.log('New item added:', newItem);  // Assurez-vous que cela est affiché dans la console
    this.isCreating = false;  // Fermer le formulaire après l'ajout de l'élément
    // Ajoutez des actions supplémentaires ici, comme l'enregistrement dans une base de données.
  }
}
