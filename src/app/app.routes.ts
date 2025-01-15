import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'map',
        loadComponent: () => import('./pages/map/map.component').then(m => m.MapComponent)
      },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent) }
];
