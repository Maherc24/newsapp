import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
//import { NewsPageModule } from '../news/news.module';
//import { Tab2PageModule } from '../tab2/tab2.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    //NewsPageModule,
    //Tab2PageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
