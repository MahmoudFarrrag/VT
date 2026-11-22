import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then((m) => m.About) },
  { path: 'services', loadComponent: () => import('./pages/services/services').then((m) => m.Services) },
  { path: 'services/:slug', loadComponent: () => import('./pages/content/content').then((m) => m.ContentPage), data: { kind: 'service' } },
  { path: 'portfolio', loadComponent: () => import('./pages/portfolio/portfolio').then((m) => m.Portfolio) },
  {
    path: 'portfolio/:slug',
    loadComponent: () => import('./pages/portfolio-details/portfolio-details').then((m) => m.PortfolioDetails),
  },
  { path: 'pricing', loadComponent: () => import('./pages/pricing/pricing').then((m) => m.Pricing) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact) },
  { path: 'partners', loadComponent: () => import('./pages/content/content').then((m) => m.ContentPage), data: { kind: 'partners' } },
  { path: 'ceo-message', loadComponent: () => import('./pages/content/content').then((m) => m.ContentPage), data: { kind: 'ceo' } },
  { path: 'news', loadComponent: () => import('./pages/content/content').then((m) => m.ContentPage), data: { kind: 'news' } },
  { path: 'news/:slug', loadComponent: () => import('./pages/content/content').then((m) => m.ContentPage), data: { kind: 'article' } },
  { path: 'success-stories', loadComponent: () => import('./pages/content/content').then((m) => m.ContentPage), data: { kind: 'success' } },
  { path: 'careers', loadComponent: () => import('./pages/content/content').then((m) => m.ContentPage), data: { kind: 'careers' } },
  { path: '**', redirectTo: '' },
];
