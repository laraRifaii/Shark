import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage  {

  constructor() { }
  menuItems = [
    { title: 'Fries' },
    { title: 'Fries' },
    { title: 'Fries' },
    { title: 'Fries' },
    { title: 'Fries' },
  ];


}
