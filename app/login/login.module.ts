import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { loginRouting } from './login.routes';
import { LoginComponent } from './login.component';
import { LoginGuard } from './login.guard';

@NgModule({
    imports: [
        CommonModule,
        loginRouting
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        LoginGuard
    ]
})
export class LoginModule { }