import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <a class="brand footer-brand" routerLink="/">
            <img src="assets/images/logo/VT-logo.png" alt="Visions-Tech logo" (error)="hideImage($event)" />
            <span>Visions-Tech</span>
          </a>
          <p>{{ lang.t('arabicSlogan') }}</p>
        </div>
        <div>
          <h3>{{ lang.t('services') }}</h3>
          <a routerLink="/services">{{ lang.t('allServices') }}</a>
          <a routerLink="/partners">{{ lang.current()==='en' ? 'Our Partners' : 'شركاؤنا' }}</a>
          <a routerLink="/news">{{ lang.current()==='en' ? 'News & Events' : 'الأخبار والفعاليات' }}</a>
          <a routerLink="/portfolio">{{ lang.t('portfolio') }}</a>
        </div>
        <div>
          <h3>{{ lang.t('contact') }}</h3>
          <a href="mailto:info@visions-tech.net">info&#64;visions-tech.net</a>
          <a href="tel:+201111028251">+20 11 11028251</a>
          <a href="https://www.linkedin.com/company/visions-tech/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://www.instagram.com/visions.tech/" target="_blank" rel="noopener">Instagram</a>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© 2026 Visions-Tech</span>
        <span>Cairo · Worldwide</span>
        <span>{{ lang.t('tagline') }}</span>
      </div>
    </footer>
  `,
})
export class Footer {
  readonly lang = inject(LanguageService);

  hideImage(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
