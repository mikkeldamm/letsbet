import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CreateBetComponent } from "./create-bet.component";

const createBetRoutes: Routes = [
    { path: "create-bet", component: CreateBetComponent }
];

export const createBetRouting: ModuleWithProviders = RouterModule.forChild(createBetRoutes);