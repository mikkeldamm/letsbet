import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login.component";
import { LoginGuard } from './login.guard';

const loginRoutes: Routes = [
    { path: "login/:id", component: LoginComponent, canActivate: [LoginGuard] }
];

export const loginRouting: ModuleWithProviders = RouterModule.forChild(loginRoutes);