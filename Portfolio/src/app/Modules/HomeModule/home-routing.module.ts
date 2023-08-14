import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/MainComponent/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'Main', pathMatch: 'full' },
  { path: 'Main', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
