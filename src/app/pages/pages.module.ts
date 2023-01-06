import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout/layout.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { NavBarModule } from './layout/nav-bar/nav-bar.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
    declarations: [
        LayoutComponent,
        SideBarComponent,
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        NavBarModule
    ]
})
export class PagesModule { }
