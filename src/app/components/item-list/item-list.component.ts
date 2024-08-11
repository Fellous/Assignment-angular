import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  isTableView = true;  // Variable to toggle between views
  searchQuery = '';

  @Output() isCreating = new EventEmitter<boolean>();

  items = [
    { color: '#00FF00', name: 'Car accident', createDate: '03/02/2021', lastUpdate: '03/02/2021', createdBy: 'Ori Lugasi' },
    { color: '#FF00FF', name: 'Human trafficking for prostitution', createDate: '26/01/2021', lastUpdate: '26/01/2021', createdBy: 'Ran Shim' },
    { color: '#FF0000', name: 'Murder', createDate: '16/10/2021', lastUpdate: '16/10/2021', createdBy: 'Chen Meir' },
    { color: '#FFA500', name: 'Suspect', createDate: '01/09/2021', lastUpdate: '24/12/2021', createdBy: 'Or Bar' },
    { color: '#FFFF00', name: 'Terrorist', createDate: '30/11/2021', lastUpdate: '30/11/2021', createdBy: 'Chen Meir' },
    { color: '#FF0000', name: 'Terrorist attack', createDate: '09/08/2020', lastUpdate: '03/02/2021', createdBy: 'Or Bar' },
  ];

  get filteredItems() {
    return this.items.filter(item => item.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  toggleView() {
    this.isTableView = !this.isTableView;
  }

  navigateToCreate() {
    this.isCreating.emit(true);  // Emit an event to notify the parent component to open the create form
  }

  addItem(newItem: { color: string, name: string, createDate: string, lastUpdate: string, createdBy: string }) {
    console.log('Adding item to list:', newItem); // Vérifiez que cela est bien affiché dans la console
    this.items.push(newItem);
  }
}
