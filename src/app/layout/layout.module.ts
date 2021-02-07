import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';

import { NavComponent } from './shared/components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionServicesComponent } from './shared/components/section-services/section-services.component';
import { BodyComponent } from './components/body/body.component';
import { PlansComponent } from './shared/components/plans/plans.component';
import { BlogComponent } from './shared/components/blog/blog.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, NavComponent, SectionServicesComponent,BodyComponent, PlansComponent, BlogComponent, ContactComponent, FooterComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule
  ],
  exports:[HeaderComponent,BodyComponent, FooterComponent]
})
export class LayoutModule { }
