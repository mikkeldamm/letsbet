import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CreateBuyinComponent } from "./create-buyin.component";

const createBuyinRoutes: Routes = [
    { path: "create-buyin", component: CreateBuyinComponent }
];

export const createBuyinRouting: ModuleWithProviders = RouterModule.forChild(createBuyinRoutes);