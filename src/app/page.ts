import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PROJECTS, SERVICES, Project } from './data';

@Component({selector:'app-page',standalone:true,imports:[CommonModule,RouterLink],templateUrl:'./page.html',styleUrl:'./page.scss'})
export class PageComponent {
  route=inject(ActivatedRoute); router=inject(Router); projects=PROJECTS; services=SERVICES; lang=signal<'en'|'ar'>(typeof localStorage!=='undefined' && localStorage.getItem('vt-lang')==='ar'?'ar':'en');
  page='home'; project?:Project; filter='All'; filters=['All','Mobile app','Website','Mobile + Web','ERP platform'];
  constructor(){ this.route.data.subscribe(d=>this.page=d['page']); this.route.paramMap.subscribe(p=>this.project=PROJECTS.find(x=>x.slug===p.get('slug'))); }
  get visible(){ return this.filter==='All'?this.projects:this.projects.filter(p=>p.type===this.filter); }
  text(en:string, ar:string, ..._ignored:string[]){return this.lang()==='en'?en:ar;}
  nextProject(delta:number){if(!this.project)return; const i=this.projects.findIndex(p=>p.slug===this.project!.slug); this.router.navigate(['/projects',this.projects[(i+delta+this.projects.length)%this.projects.length].slug]);}
}
