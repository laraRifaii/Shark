import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { SharedModule } from 'src/app/Shared/shared/shared.module';
import { HomePageRoutingModule } from './home-routing.module';
import { SwiperComponent } from 'src/app/Components/swiper/swiper.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,

  ],
  declarations: [HomePage, SwiperComponent]
})
export class HomePageModule {}
