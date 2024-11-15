import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { UserService } from 'src/app/Services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  userIsLoggedIn$!: Observable<boolean>;
  username: string = '';

  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private userService: UserService
  ) {}
  ngOnInit() {
    this.userIsLoggedIn$ = this.userService.isLoggedIn$;
  }

  
  menuItems = [
    {
      title: 'Provencial Kaslik',
      dateCreated: '20-2-2022',
      dueDate: '20-2-2025',
    },
    {
      title: 'Provencial Jbeil',
      dateCreated: '20-2-2022',
      dueDate: '20-2-2025',
    },
    {
      title: 'Provencial Tripoli',
      dateCreated: '20-2-2022',
      dueDate: '20-2-2025',
    },
  ];

  qrItems = [
    {
      title: 'Provencial Kaslik',
      type: 'Business Card',
      dateCreated: '20-2-2022',
      dueDate: '20-2-2025',
    },
    {
      title: 'Provencial Kaslik',
      type: 'Business Card',
      dateCreated: '20-2-2022',
      dueDate: '20-2-2025',
    },
  ];
  openMenu() {
    this.menu.open('first');
  }
}
