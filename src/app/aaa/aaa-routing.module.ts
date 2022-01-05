import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AaaComponent } from './aaa.component';

const routes: Routes = [{ path: '', component: AaaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AaaRoutingModule { }
