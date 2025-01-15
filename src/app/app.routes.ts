import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'map',
        loadComponent: () => import('./map/map.component').then(m => m.MapComponent)
      },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent) }
];
