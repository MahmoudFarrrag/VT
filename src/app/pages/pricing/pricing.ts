import { Component, inject } from '@angular/core';
import { pricingPlans } from '../../data/pricing.data';
import { LanguageService } from '../../core/services/language.service';
import { PricingCard } from '../../shared/components/pricing-card/pricing-card';
import { CtaSection } from '../../shared/components/cta-section/cta-section';

@Component({
  selector: 'app-pricing',
  imports: [PricingCard, CtaSection],
  template: `
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">{{ lang.t('pricing') }}</span>
        <h1>{{ lang.t('pricing') }}</h1>
        <p>{{ heroText }}</p>
      </div>
    </section>
    <section class="section container pricing-note-grid">
      @for (note of pricingNotes; track note.title) {
        <article class="glass-card content-card pricing-note-card">
          <h2>{{ note.title }}</h2>
          <p>{{ note.text }}</p>
        </article>
      }
    </section>
    <section class="section container pricing-section">
      <div class="cards-grid pricing-grid">
        @for (plan of plans; track plan.slug) {
          <app-pricing-card [plan]="plan" />
        }
      </div>
    </section>
    <section class="section container"><app-cta-section /></section>
  `,
})
export class Pricing {
  readonly lang = inject(LanguageService);
  readonly plans = pricingPlans;

  get heroText(): string {
    return this.lang.current() === 'en'
      ? 'Every project is quoted around its real scope, features, integrations, and delivery requirements. Share your goals, and we will shape the right package for your business.'
      : 'كل مشروع يتم تسعيره حسب نطاقه الفعلي والخصائص المطلوبة والربط واحتياجات التنفيذ. شاركنا هدفك، ونجهز لك الباقة المناسبة لعملك.';
  }

  get pricingNotes() {
    return this.lang.current() === 'en'
      ? [
          {
            title: 'Quoted around your scope',
            text: 'We review the pages, features, integrations, content, and technical needs before preparing a clear proposal.',
          },
          {
            title: 'Built to fit your stage',
            text: 'Each package is shaped to match your current priorities while leaving room for growth, support, and future upgrades.',
          },
        ]
      : [
          {
            title: 'تسعير حسب نطاق مشروعك',
            text: 'نراجع الصفحات والخصائص والربط والمحتوى والاحتياجات التقنية قبل تجهيز عرض واضح ومناسب.',
          },
          {
            title: 'باقة تناسب مرحلتك',
            text: 'نصمم الباقة حول أولوياتك الحالية مع قابلية للتوسع والدعم والتطوير لاحقاً.',
          },
        ];
  }
}
