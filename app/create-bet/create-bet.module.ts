import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { createBetRouting } from "./create-bet.routes";
import { CreateBetComponent } from "./create-bet.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        createBetRouting
    ],
    declarations: [
        CreateBetComponent
    ]
})
export class CreateBetModule { }