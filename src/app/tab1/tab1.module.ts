import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
