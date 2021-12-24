import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new/new.component';
import { RegisterComponent } from './register/register.component';
import { SecondComponent } from './second/second.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {path:'new',component:NewComponent},
  {path:'second',component:SecondComponent},
  {path:'register',component:RegisterComponent},
  {path:'staff',component:StaffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
