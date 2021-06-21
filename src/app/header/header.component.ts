import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;

  constructor(private storageService: DataStorageService) { }

  onSaveData() {
    this.storageService.storeRecipes();
  }

  onFetchData() {
    this.storageService.fetchRecipes().subscribe();
  }

}

