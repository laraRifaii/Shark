import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SideMenuComponent } from 'src/app/Components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SideMenuComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [SideMenuComponent],
})
export class SharedModule {}
