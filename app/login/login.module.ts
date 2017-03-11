import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";

import { loginRouting } from './login.routes';
import { LoginComponent } from './login.component';
import { LoginGuard } from './login.guard';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
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