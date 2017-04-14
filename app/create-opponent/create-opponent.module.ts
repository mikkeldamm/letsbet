import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { createOpponentsRouting } from "./create-opponent.routes";
import { CreateOpponentComponent } from "./create-opponent.component";

@NgModule({
    imports: [
        CommonModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        createOpponentsRouting
    ],
    declarations: [
        CreateOpponentComponent
    ]
})
export class CreateOpponentModule { }