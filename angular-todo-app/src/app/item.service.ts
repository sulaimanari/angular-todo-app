import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  private todoItem: Item[] = [];
  private nextId = 1;

  constructor() {
    this.DefaultItems();
  }

  private DefaultItems(): void {
    const defaultItems: Item[] = [
      { id: this.nextId++, content: 'Kaffe trinken' },
      { id: this.nextId++, content: 'Mit velo zur arbeit' },
      { id: this.nextId++, content: 'To Do App mit Angular erstellen' }
    ];

    this.todoItem.push(...defaultItems);
  }

  getTodosItems(): Item[] {
    return this.todoItem;
  }

  addTodoItem(addItem: Item): void {
    addItem.id = this.nextId++;
    this.todoItem.push(addItem);
  }
}
