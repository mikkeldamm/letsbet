import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { createOpponentsRouting } from "./create-opponent.routes";
import { CreateOpponentComponent } from "./create-opponent.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        createOpponentsRouting
    ],
    declarations: [
        CreateOpponentComponent
    ]
})
export class CreateOpponentModule { }