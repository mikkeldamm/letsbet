import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { createBetRouting } from "./create-bet.routes";
import { CreateBetComponent } from "./create-bet.component";

@NgModule({
    imports: [
        CommonModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        createBetRouting
    ],
    declarations: [
        CreateBetComponent
    ]
})
export class CreateBetModule { }