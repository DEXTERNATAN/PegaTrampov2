import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { AuthGuard } from './services/auth/auth.guard';
import { AppShellComponent } from './app-shell.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  // {
  //   path: 'about',
  //   component: AboutComponent
  //   // canActivate: [AuthGuard]
  // },
  {
    path: 'pages',
    component: AppShellComponent,
    data: {
      title: 'Inicial'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule'
      }
    ]
  },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  // {
  //   path: '**',
  //   component: Error404Component
  // }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
