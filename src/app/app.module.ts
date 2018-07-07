import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FunfactsComponent } from './funfacts/funfacts.component';
import { EducationComponent } from './education/education.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes:Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'funfacts', component: FunfactsComponent},
  { path: 'education', component: EducationComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'testmonials', component: TestimonialsComponent},
  { path: 'contact', component: ContactComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    FunfactsComponent,
    EducationComponent,
    PortfolioComponent,
    TestimonialsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
