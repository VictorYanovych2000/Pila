import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { TableComponent} from "./table/table.component";

const routes: Routes = [
  { path: 'register', component: RegistrationFormComponent},
  { path: 'login', component: LoginFormComponent },
  { path: 'table', component: TableComponent},
  { path: '', redirectTo: '/table', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
