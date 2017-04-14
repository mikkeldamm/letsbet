import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { createBetRouting } from "./create-bet.routes";
import { CreateBetComponent } from "./create-bet.component";

@NgModule({
    imports: [
        CommonModule,
        createBetRouting
    ],
    declarations: [
        CreateBetComponent
    ]
})
export class CreateBetModule { }