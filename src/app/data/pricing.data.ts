import { PricingPlan } from '../core/models/site.models';

export const pricingPlans: PricingPlan[] = [
  {
    slug: 'portfolio-website',
    name: { en: 'Portfolio Website', ar: 'موقع بورتفوليو' },
    price: { en: 'Tailored package', ar: 'باقة مخصصة' },
    description: {
      en: 'A focused personal site that presents your work, profile, and contact paths clearly.',
      ar: 'موقع شخصي مختصر يعرض أعمالك وملفك وطرق التواصل بوضوح.',
    },
    features: [
      { en: 'Work samples and profile sections', ar: 'أعمال مختارة وأقسام تعريفية' },
      { en: 'Contact form and social links', ar: 'نموذج تواصل وروابط اجتماعية' },
      { en: 'Responsive, polished presentation', ar: 'تصميم متجاوب واحترافي' },
    ],
  },
  {
    slug: 'business-website',
    name: { en: 'Business Website', ar: 'موقع شركة' },
    price: { en: 'Custom quote', ar: 'عرض مخصص' },
    description: {
      en: 'A professional company website built for credibility, clarity, and direct enquiries.',
      ar: 'موقع شركة احترافي يركز على الثقة والوضوح وطلبات التواصل.',
    },
    features: [
      { en: 'Core pages and service sections', ar: 'صفحات أساسية وأقسام خدمات' },
      { en: 'Brand-focused responsive design', ar: 'تصميم متجاوب يعكس الهوية' },
      { en: 'SEO-ready structure', ar: 'بنية جاهزة لمحركات البحث' },
    ],
  },
  {
    slug: 'e-commerce',
    name: { en: 'E-commerce Store', ar: 'متجر إلكتروني' },
    price: { en: 'Based on store scope', ar: 'حسب نطاق المتجر' },
    description: {
      en: 'A clean online store experience for products, categories, checkout, and orders.',
      ar: 'تجربة متجر واضحة للمنتجات والتصنيفات والدفع والطلبات.',
    },
    features: [
      { en: 'Products, categories, and cart', ar: 'منتجات وتصنيفات وسلة شراء' },
      { en: 'Checkout and order flow', ar: 'مسار دفع وإدارة طلبات' },
      { en: 'Ready for payment integrations', ar: 'جاهز للربط مع بوابات الدفع' },
    ],
  },
  {
    slug: 'dashboard-systems',
    name: { en: 'Dashboards & Custom Systems', ar: 'لوحات تحكم وأنظمة مخصصة' },
    price: { en: 'Scoped after discovery', ar: 'يحدد بعد دراسة النطاق' },
    description: {
      en: 'Custom admin panels and internal tools for operations, users, and reporting.',
      ar: 'لوحات وأنظمة داخلية مخصصة للعمليات والمستخدمين والتقارير.',
    },
    features: [
      { en: 'Roles, permissions, and workflows', ar: 'أدوار وصلاحيات ومسارات عمل' },
      { en: 'Tables, filters, and reports', ar: 'جداول وفلاتر وتقارير' },
      { en: 'Scalable API-ready structure', ar: 'بنية قابلة للتوسع والربط' },
    ],
  },
  {
    slug: 'mobile-app',
    name: { en: 'Mobile Application', ar: 'تطبيق جوال' },
    price: { en: 'Project-based quote', ar: 'عرض حسب المشروع' },
    description: {
      en: 'Mobile app design and development for customer journeys, requests, and services.',
      ar: 'تصميم وتطوير تطبيقات للجوال لمسارات العملاء والطلبات والخدمات.',
    },
    features: [
      { en: 'User flows and app screens', ar: 'مسارات مستخدم وشاشات تطبيق' },
      { en: 'Accounts, forms, or bookings', ar: 'حسابات ونماذج أو حجوزات' },
      { en: 'Backend and API planning', ar: 'تخطيط للربط والواجهة الخلفية' },
    ],
  },
  {
    slug: 'maintenance-hosting',
    name: { en: 'Hosting & Maintenance', ar: 'الاستضافة والصيانة' },
    price: { en: 'Flexible support plan', ar: 'خطة دعم مرنة' },
    description: {
      en: 'Ongoing support for hosting, deployment, updates, monitoring, and fixes.',
      ar: 'دعم مستمر للاستضافة والنشر والتحديثات والمتابعة والإصلاحات.',
    },
    features: [
      { en: 'Hosting, SSL, and backups', ar: 'استضافة وSSL ونسخ احتياطي' },
      { en: 'Updates and issue fixes', ar: 'تحديثات وإصلاح مشاكل' },
      { en: 'Monthly support by need', ar: 'دعم شهري حسب الحاجة' },
    ],
  },
];
