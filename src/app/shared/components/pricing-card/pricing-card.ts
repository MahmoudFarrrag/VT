import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PricingPlan } from '../../../core/models/site.models';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-pricing-card',
  imports: [RouterLink],
  template: `
    <article class="glass-card pricing-card reveal">
      <h3>{{ lang.text(plan().name) }}</h3>
      <strong class="pricing-badge">{{ lang.text(plan().price) }}</strong>
      <p>{{ lang.text(plan().description) }}</p>
      <ul class="check-list">
        @for (feature of plan().features; track lang.text(feature)) {
          <li>{{ lang.text(feature) }}</li>
        }
      </ul>
      <a class="btn btn-secondary" routerLink="/contact">{{ startProjectText }}</a>
    </article>
  `,
})
export class PricingCard {
  readonly plan = input.required<PricingPlan>();
  readonly lang = inject(LanguageService);

  get startProjectText(): string {
    return this.lang.current() === 'en' ? 'Start Your Project' : 'ابدأ مشروعك';
  }
}
