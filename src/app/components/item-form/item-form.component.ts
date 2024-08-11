import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {
  @Output() close = new EventEmitter<void>();
  @Output() itemCreated = new EventEmitter<{ color: string, name: string, createDate: string, lastUpdate: string, createdBy: string }>();

  item = {
    name: '',
    description: '',
    color: '#000000'
  };

  onSubmit() {
    const newItem = {
      color: this.item.color,
      name: this.item.name,
      createDate: new Date().toLocaleDateString(),
      lastUpdate: new Date().toLocaleDateString(),
      createdBy: 'User Name'  // Remplacez par la logique réelle pour récupérer le nom de l'utilisateur
    };

    this.itemCreated.emit(newItem);  // Émettre l'objet nouvellement créé
    this.close.emit();  // Fermer le formulaire après soumission
  }

  closeForm() {
    this.close.emit();  // Émet l'événement pour fermer le formulaire
  }
}
