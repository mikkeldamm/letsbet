import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";

import { RouterExtensions } from 'nativescript-angular/router';

import { Subscription } from 'rxjs/Subscription';

import { Store } from '@ngrx/store';
import { Actions } from './../store/app.actions';
import { AppState } from './../store/app.state';
import { Bet } from './../store/app.model';

import { KeyboardObserver } from './../utils/keyboard-observer';

import * as application from "application";

declare var UIKeyboardWillChangeFrameNotification: any;
declare var UIKeyboardFrameEndUserInfoKey: any;
declare var UIKeyboardAppearanceDark: any;
declare var UITextAutocorrectionTypeNo: any;
declare var UIView: any;

declare const NSAttributedString: any;
declare const NSDictionary: any;
declare const NSForegroundColorAttributeName: any;

import { action } from "ui/dialogs";
import { Color } from "color";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import { Label } from "ui/label";
import { iOSApplication } from "application";

@Component({
    selector: "create-bet",
    moduleId: module.id,
    templateUrl: "./create-bet.component.html",
    styleUrls: ["./create-bet-common.css"]
})
export class CreateBetComponent implements OnInit, OnDestroy, AfterViewInit {

    @ViewChild("textContainer") textContainer: ElementRef;
    @ViewChild("textPushContainer") textPushContainer: ElementRef;

    public betDescription: string = "";

    private _keyboardHeightChangeSubscription: Subscription;

    constructor(private _page: Page,
        private _router: RouterExtensions,
        private _store: Store<AppState>,
        private _actions: Actions,
        private _keyboardObserver: KeyboardObserver) {

        this._page.actionBarHidden = true;
        this._page.enableSwipeBackNavigation = false;
        this._page.backgroundSpanUnderStatusBar = true;

        this._page.on("navigatingTo", () => {
            this.test();
        });
    }

    public ngOnInit() {

    }

    public ngOnDestroy() {

        if (this._keyboardHeightChangeSubscription) {
            this._keyboardHeightChangeSubscription.unsubscribe();
        }
    }

    public ngAfterViewInit() {

        this._keyboardHeightChangeSubscription = this._keyboardObserver.heightChange$().subscribe((height) => {

            this.textPushContainer.nativeElement.height = height;
        });
        this.test();
    }

    public test() {

        const textField = this.textContainer.nativeElement as TextField;
        if (textField) {

            textField.ios.keyboardAppearance = UIKeyboardAppearanceDark;
            textField.ios.autocorrectionType = UITextAutocorrectionTypeNo;
            textField.ios.inputAccessoryView = UIView.alloc().init();
            textField.focus();
        }
    }

    public onTap() {
        
        const newBet: Bet = {
            description: this.betDescription,
            buyin: null
        };

        this._store.dispatch(this._actions.addBet(newBet))


        const textField = this.textContainer.nativeElement as TextField;
        if (textField) {
            //textField.dismissSoftInput();
        }

        this._router.navigate(["/create-buyin"]);
    }
}