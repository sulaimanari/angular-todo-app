import { Component } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular To Do App';
  items: Item[];
  newTodoContent: string = '';

  constructor(private itemService: ItemService) {
    this.items = this.itemService.getTodosItems();
  }

  addItem(): void {
    if (this.newTodoContent.trim() !== '') {
      const newItem: Item = {
        content: this.newTodoContent,
        id: 0
      };
      this.itemService.addTodoItem(newItem);
      this.items = this.itemService.getTodosItems();
      this.newTodoContent = ''; 
    }
  }

  deleteItem(itemId: number): void {
      this.itemService.deleteItem(itemId);
      this.items = this.itemService.getTodosItems();
  }

  editItem(itemId: number): void { 
    this.itemService.editItem(itemId);
    this.items = this.itemService.getTodosItems();
  }
}
