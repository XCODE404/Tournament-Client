import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { TournamentRoutingModule } from "./tournament-routing.module";
import { TournamentComponent } from "./tournament.component";


@NgModule({
    declarations: [
        TournamentComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        TournamentRoutingModule,
    ]
})
export class TournamentModule { }