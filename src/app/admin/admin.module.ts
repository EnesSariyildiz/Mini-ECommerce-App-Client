import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { UiModule } from '../ui/ui.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule
    // Eğer ki bir modül başka bir modülü kendii içinde benimsicekse o modülü import etmesi gerekiyor.
    // Burda Layout'u Admin'e import ediyoruz.
  ],
  exports:[
    LayoutModule 
  ]
})
export class AdminModule { }

 
