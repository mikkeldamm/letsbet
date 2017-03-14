import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CreateOpponentComponent } from "./create-opponent.component";

const createOpponentRoutes: Routes = [
    { path: "create-opponent/:id", component: CreateOpponentComponent }
];

export const createOpponentsRouting: ModuleWithProviders = RouterModule.forChild(createOpponentRoutes);