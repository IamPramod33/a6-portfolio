import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { 
    path: 'home',    
    loadChildren: "../app/modules/home/home.module#HomeModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule],
  declarations: [],
  providers: []
})
export class AppRoutingModule {}
