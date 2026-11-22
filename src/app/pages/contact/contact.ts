import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  template: `
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">{{ lang.t('contact') }}</span>
        <h1>{{ lang.t('contactTitle') }}</h1>
        <p>{{ lang.t('contactText') }}</p>
      </div>
    </section>

    <section class="section container contact-grid">
      <div class="contact-panel">
        <a class="contact-method glass-card" href="https://wa.me/201111028251" target="_blank" rel="noopener">
          <span>WA</span>
          <div><strong>{{ lang.t('whatsapp') }}</strong><small>+20 11 11028251</small></div>
        </a>
        <a class="contact-method glass-card" href="tel:+201111028251">
          <span>PH</span>
          <div><strong>{{ lang.t('callNow') }}</strong><small>+20 11 11028251</small></div>
        </a>
        <a class="contact-method glass-card" href="mailto:info@visions-tech.net">
          <span>EM</span>
          <div><strong>{{ lang.t('emailUs') }}</strong><small>info&#64;visions-tech.net</small></div>
        </a>
        <div class="glass-card map-box">45 Ibn Nafes, Naser City, Cairo, Egypt</div>
        <div class="social-row">
          <span>{{ lang.t('socialLinks') }}</span>
          <a href="https://www.facebook.com/visionstech" target="_blank" aria-label="Facebook">FB</a>
          <a href="https://www.instagram.com/visions.tech/" target="_blank" aria-label="Instagram">IG</a>
          <a href="https://www.linkedin.com/company/visions-tech/" target="_blank" aria-label="LinkedIn">IN</a>
        </div>
      </div>

      <form class="glass-card contact-form" (ngSubmit)="submitted = true">
        <label>
          {{ lang.t('name') }}
          <input name="name" [(ngModel)]="form.name" type="text" required />
        </label>
        <label>
          {{ lang.t('phone') }}
          <input name="phone" [(ngModel)]="form.phone" type="tel" required />
        </label>
        <label>
          {{ lang.t('message') }}
          <textarea name="message" [(ngModel)]="form.message" rows="6" required></textarea>
        </label>
        <button class="btn btn-primary" type="submit">{{ lang.t('send') }}</button>
        @if (submitted) {
          <p class="form-note">{{ lang.current() === 'en' ? 'Backend is not connected yet. Your form UI is ready for API integration.' : 'لم يتم ربط الباك إند بعد. واجهة النموذج جاهزة للربط لاحقًا.' }}</p>
        }
      </form>
    </section>
  `,
})
export class Contact {
  readonly lang = inject(LanguageService);
  submitted = false;
  form = { name: '', phone: '', message: '' };
}
