import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styleUrls: ['./manager.page.scss'],
})

export class ManagerPage {

  menuItems = [
    { title: 'Item', route: '/items' },
    { title: 'Categories', route: '/categories' },
    { title: 'Slider', route: '/slider' },
    { title: 'Analytic', route: '/analytics' },
    { title: 'Announcement', route: '/announcements' },
  ];

  constructor(private navCtrl: NavController) {}

  navigateTo(route: string) {
    this.navCtrl.navigateForward(route);
  }
}
