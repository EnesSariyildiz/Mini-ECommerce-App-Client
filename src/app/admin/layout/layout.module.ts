import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [
    LayoutComponent
    // Bir componentin uygulma süresince kullanılabilir olması için, dizin olarak kendisine en yakın modul'e declare edilmesi gerekiyor.
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    MatSidenavModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
