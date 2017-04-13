import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { createOpponentsRouting } from "./create-opponent.routes";
import { CreateOpponentComponent } from "./create-opponent.component";

@NgModule({
    imports: [
        CommonModule,
        createOpponentsRouting
    ],
    declarations: [
        CreateOpponentComponent
    ]
})
export class CreateOpponentModule { }