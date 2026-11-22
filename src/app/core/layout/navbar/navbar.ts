import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="site-header">
      <nav class="nav container" aria-label="Main navigation">
        <a class="brand" routerLink="/" (click)="closeMenu()">
          <img src="assets/images/logo/VT-logo.png" alt="Visions-Tech logo" (error)="hideImage($event)" />
          <span>Visions-Tech</span>
        </a>

        <button class="menu-toggle" type="button" (click)="menuOpen.set(!menuOpen())" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>

        <div class="nav-links" [class.open]="menuOpen()">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" (click)="closeMenu()">{{ lang.current()==='en' ? 'Home' : 'الرئيسية' }}</a>
          <div class="nav-dropdown"><button type="button">{{ lang.current()==='en' ? 'About Us' : 'من نحن' }}<span class="dropdown-chevron" aria-hidden="true"></span></button><div class="dropdown-menu"><a routerLink="/about">{{ lang.current()==='en' ? 'About Visions-Tech' : 'عن Visions-Tech' }}</a><a routerLink="/partners">{{ lang.current()==='en' ? 'Our Partners' : 'شركاؤنا' }}</a><a routerLink="/ceo-message">{{ lang.current()==='en' ? 'CEO Message' : 'رسالة الرئيس التنفيذي' }}</a><a routerLink="/contact">{{ lang.current()==='en' ? 'Contact Us' : 'تواصل معنا' }}</a></div></div>
          <div class="nav-dropdown"><button type="button">{{ lang.current()==='en' ? 'Solutions & Services' : 'الحلول والخدمات' }}<span class="dropdown-chevron" aria-hidden="true"></span></button><div class="dropdown-menu wide">@for (s of serviceLinks; track s.path) {<a [routerLink]="s.path">{{lang.current()==='en'?s.en:s.ar}}</a>}</div></div>
          <a routerLink="/portfolio" routerLinkActive="active" (click)="closeMenu()">{{ lang.current()==='en' ? 'Projects' : 'المشاريع' }}</a>
          <div class="nav-dropdown"><button type="button">{{ lang.current()==='en' ? 'Insights' : 'الرؤى' }}<span class="dropdown-chevron" aria-hidden="true"></span></button><div class="dropdown-menu"><a routerLink="/news">{{lang.current()==='en'?'News & Events':'الأخبار والفعاليات'}}</a><a routerLink="/success-stories">{{lang.current()==='en'?'Success Stories':'قصص النجاح'}}</a><a routerLink="/careers">{{lang.current()==='en'?'Careers':'الوظائف'}}</a></div></div>
          <button class="search-toggle" type="button" (click)="searchOpen.set(!searchOpen())" aria-label="Search">⌕</button>
          <button class="lang-switch" type="button" (click)="lang.toggle()">
            {{ lang.current() === 'en' ? 'AR' : 'EN' }}
          </button>
        </div>
      </nav>
      @if (searchOpen()) { <div class="search-bar container"><input autofocus [placeholder]="lang.current()==='en'?'Search Visions-Tech':'ابحث في Visions-Tech'" (input)="searchTerm.set($any($event.target).value)" (keydown.enter)="search()"><span>{{searchTerm() ? (lang.current()==='en'?'Press Enter to search':'اضغط Enter للبحث') : ''}}</span></div> }
    </header>
  `,
})
export class Navbar {
  readonly lang = inject(LanguageService);
  private readonly router = inject(Router);
  readonly menuOpen = signal(false);
  readonly searchOpen = signal(false);
  readonly searchTerm = signal('');
  readonly navItems = [
    { path: '/', label: 'home' as const, exact: true },
  ];
  readonly serviceLinks = [
    {path:'/services/enterprise-solutions',en:'Enterprise Solutions',ar:'حلول المؤسسات'},
    {path:'/services/custom-software',en:'Custom Software Development',ar:'تطوير البرمجيات المخصصة'},
    {path:'/services/cloud-infrastructure',en:'Cloud Infrastructure Services',ar:'خدمات البنية السحابية'},
    {path:'/services/research-development',en:'Research & Development',ar:'البحث والتطوير'},
    {path:'/services/digital-transformation',en:'Digital Transformation Consulting',ar:'استشارات التحول الرقمي'},
    {path:'/services/artificial-intelligence',en:'Artificial Intelligence',ar:'الذكاء الاصطناعي'},
    {path:'/services/cafm',en:'Computer-Aided Facility Management',ar:'إدارة المرافق'},
    {path:'/services/penetration-testing',en:'AI Powered Penetration Testing',ar:'اختبار الاختراق المدعوم بالذكاء الاصطناعي'},
    {path:'/services/analytics-growth',en:'Digital Analytics & Growth Marketing',ar:'التحليلات والتسويق الرقمي'},
    {path:'/services/product-design',en:'Digital Product Design & Management',ar:'تصميم وإدارة المنتجات الرقمية'},
    {path:'/services/ux-design',en:'User Experience & Design',ar:'تجربة المستخدم والتصميم'},
  ];

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  search(): void {
    if (this.searchTerm().trim()) this.router.navigate(['/news'], { queryParams: { q: this.searchTerm().trim() } });
    this.searchOpen.set(false);
  }

  hideImage(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
