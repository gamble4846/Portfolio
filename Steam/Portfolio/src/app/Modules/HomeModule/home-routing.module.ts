import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenerComponent } from './Components/OpenerComponent/opener.component';

const routes: Routes = [
  { path: '', redirectTo: 'Opener', pathMatch: 'full' },
  { path: 'Opener', component: OpenerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
