import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { createBuyinRouting } from "./create-buyin.routes";
import { CreateBuyinComponent } from "./create-buyin.component";

@NgModule({
    imports: [
        CommonModule,
        createBuyinRouting
    ],
    declarations: [
        CreateBuyinComponent
    ]
})
export class CreateBuyinModule { }