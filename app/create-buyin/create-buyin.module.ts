import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { createBuyinRouting } from "./create-buyin.routes";
import { CreateBuyinComponent } from "./create-buyin.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        createBuyinRouting
    ],
    declarations: [
        CreateBuyinComponent
    ]
})
export class CreateBuyinModule { }