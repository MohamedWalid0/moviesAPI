import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:"", redirectTo:'signin', pathMatch:'full' },
  {path:"home", canActivate:[AuthGuard] ,component:HomeComponent},
  {path:"movieDetails/:id", component:MovieDetailsComponent},
  {path:"registration" ,component:RegisterComponent},
  {path:"signin" , component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
