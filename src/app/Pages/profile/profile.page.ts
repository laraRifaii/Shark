// profile.page.ts
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {
  constructor(
    private navCtrl: NavController,
    private userService: UserService
  ) {}

  logout() {
    this.userService.logout();
    this.navCtrl.navigateRoot('/home');
  }
}

