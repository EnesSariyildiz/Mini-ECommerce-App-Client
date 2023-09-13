import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from "./admin/components/dashboard/dashboard.component";
import { LayoutComponent} from "./admin/layout/layout.component";
import { HomeComponent } from "./ui/components/home/home.component";

const routes: Routes=[

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)
    //CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
