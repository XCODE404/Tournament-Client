import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { NavBarComponent } from "./nav-bar.component";

@NgModule({
    declarations: [
		NavBarComponent,
	],
	exports: [
		NavBarComponent
	],
	imports: [
		CommonModule,
	] 
})
export class NavBarModule { }