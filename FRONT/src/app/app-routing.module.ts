import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HubComponent } from './pages/hub/hub.component';
import { HackClasesComponent } from './pages/hack-clases/hack-clases.component';
import { HackClassManagerComponent } from './pages/hack-class-manager/hack-class-manager.component';
import { HackClaseComponent } from './pages/hack-clase/hack-clase.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './shared/guards/auth.guard';

const routes: Routes = [ {
  path: "", component: HubComponent
}, 
{path: "clases", component: HackClasesComponent
},
{path: "editar", component: HackClassManagerComponent, canActivate: [authGuard]
},
{path: "usuarios", component: UsersComponent
},
{path: "clases/:id", component: HackClaseComponent
},{
  path: "login", component: LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
