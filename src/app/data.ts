export interface Project { slug:string; title:string; category:string; type:string; image:string; hero:string; description:string; tags:string[]; accent:string; }
const p=(slug:string,title:string,category:string,type:string,image:string,description:string,tags:string[],accent:string):Project=>({slug,title,category,type,image,hero:image,description,tags,accent});
export const PROJECTS: Project[] = [
 p('miracle','Miracle','Integrated product','Mobile + Web','assets/images/projects/miracle-website/cover.jpeg','A connected digital ecosystem bringing together a mobile app, marketing website and management dashboard.',['Android','Web','Dashboard'],'#4d8dff'),
 p('erp','Anmar ERP','Business systems','ERP platform','assets/images/blue-logo.svg','A central operations platform that connects teams, inventory, customers and reporting in one clear workspace.',['ERP','Operations','Analytics'],'#7c9cff'),
 p('esaal-website','Esaal Website','Web experiences','Website','assets/images/projects/esaal-website/cover.jpeg','A focused digital home for a service brand, designed to make discovery and action feel effortless.',['Web','UX/UI','Responsive'],'#e7b35a'),
 p('al-kashim-website','Al Kashim Website','Web experiences','Website','assets/images/projects/al-kashim-website/cover.jpeg','A polished web presence built around clear storytelling, trust and a confident visual system.',['Web','Brand','UX/UI'],'#f09962'),
 p('wajad','وجد','Platforms','Mobile + Web','assets/images/projects/wajad-website/cover.jpeg','A warm, Arabic-first digital experience that makes the journey from discovery to action feel natural.',['Android','Web','RTL'],'#dc6e8f'),
 p('mr-tayer-mobile','Mr Tayer Mobile','On-demand','Mobile app','assets/images/projects/mr-tayer-mobile/cover-customer.jpeg','A multi-sided delivery experience connecting customers, couriers and operations through one coordinated product.',['Android','Logistics','Product design'],'#e6a35d'),
 p('haraj-mobile','Haraj Mobile','Marketplaces','Mobile app','assets/images/projects/haraj-mobile/cover.jpeg','A mobile marketplace experience that keeps browsing, discovery and listings simple and immediate.',['Android','Marketplace','UX/UI'],'#4ec0b7'),
 p('maktabty','مكتبتي','Education','Mobile + Web','assets/images/projects/maktabty-website/cover.jpeg','A digital library experience designed to make learning resources easier to discover and return to.',['Android','Web','Education'],'#8d75d8'),
 p('thouq-mobile','Thouq Mobile','Commerce','Mobile app','assets/images/projects/thouq-mobile/cover.jpeg','A considered mobile shopping concept, presented with the available product visual assets.',['Mobile','Commerce','Product design'],'#d85a89'),
 p('ganatak','جنتك','Agriculture','Mobile + Web','assets/images/projects/ganatak-website/cover.jpeg','A connected agricultural platform combining content, products and administration in one coherent experience.',['Android','Web','Dashboard'],'#66b87a'),
 p('rafeeq-darbak-mobile','Rafeeq Darbak','Lifestyle','Mobile app','assets/images/projects/rafeeq-darbak-mobile/mobile-01.jpg','A calm daily companion with clear mobile flows and an administration layer for content and users.',['Android','Content','Dashboard'],'#2ab1a0'),
 p('tashlih-mobile','Tashlih Mobile','Automotive','Mobile app','assets/images/projects/tashlih-mobile/cover.jpeg','A focused request-and-offer journey that brings more order to sourcing automotive parts.',['Mobile','Marketplace','Product design'],'#e66b4f')
];
export const SERVICES = [
 {icon:'✦', title:'Digital products', ar:'المنتجات الرقمية', text:'From first sketch to launch, we shape products people understand and enjoy using.'},
 {icon:'◈', title:'Web platforms', ar:'منصات الويب', text:'Fast, resilient web experiences with a strong visual point of view and a clear business purpose.'},
 {icon:'⌁', title:'Mobile applications', ar:'تطبيقات الجوال', text:'Native-feeling mobile journeys designed around real-world habits and moments.'},
 {icon:'▦', title:'Business systems', ar:'الأنظمة الإدارية', text:'Dashboards, workflows and internal tools that bring operational clarity to growing teams.'},
 {icon:'◎', title:'Product strategy', ar:'استراتيجية المنتج', text:'A practical bridge between ambitious ideas, customer needs and measurable outcomes.'},
 {icon:'↗', title:'AI & automation', ar:'الذكاء الاصطناعي والأتمتة', text:'Smarter workflows and thoughtful automation that create room for people to do their best work.'}
];
