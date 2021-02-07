import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { SectionServicesComponent } from './shared/components/section-services/section-services.component';
import { BodyComponent } from './components/body/body.component';



@NgModule({
  declarations: [HeaderComponent, NavComponent, SectionServicesComponent,BodyComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule
  ],
  exports:[HeaderComponent,BodyComponent]
})
export class LayoutModule { }
