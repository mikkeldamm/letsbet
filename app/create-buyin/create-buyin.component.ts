import { Component, ElementRef, ViewChild, AfterViewInit, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { RouterExtensions } from 'nativescript-angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Page } from "ui/page";
import { TextField } from "ui/text-field";

import { Actions } from '../store/app.actions';
import { AppState } from '../store/app.state';
import { Bet } from '../store/app.model';

import { KeyboardObserver } from '../utils/keyboard-observer';
import { guidGenerator } from '../utils/id-generator';

import * as application from "application";
import * as firebase from "nativescript-plugin-firebase";

@Component({
    selector: "create-buyin",
    moduleId: module.id,
    templateUrl: "./create-buyin.component.html",
    styleUrls: ["./create-buyin-common.css"]
})
export class CreateBuyinComponent implements OnInit, OnDestroy, AfterViewInit {

    @ViewChild("textContainer") textContainer: ElementRef;
    @ViewChild("textPushContainer") textPushContainer: ElementRef;

    public buyinDescription: string = '';

    private _keyboardHeightChangeSubscription: Subscription;
    private _betId: string;

    constructor(private _page: Page,
                private _router: RouterExtensions,
                private _route: ActivatedRoute,
                private _store: Store<AppState>,
                private _actions: Actions,
                private _keyboardObserver: KeyboardObserver) {}

    public ngOnInit() {

        this._page.actionBarHidden = true;
        this._page.enableSwipeBackNavigation = false;
        this._page.backgroundSpanUnderStatusBar = true;

        this._page.on("navigatingTo", () => {
            this.prepareTextField();
        });

        this._route.params.subscribe(params => {
            this._betId = params['id'];
        });
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

        this.prepareTextField();
    }

    public prepareTextField() {

        const textField = this.textContainer.nativeElement as TextField;
        if (textField) {

            textField.ios.keyboardAppearance = UIKeyboardAppearanceDark;
            textField.ios.autocorrectionType = UITextAutocorrectionTypeNo;
            textField.ios.inputAccessoryView = UIView.alloc().init();
            textField.focus();
        }
    }

    public onGoToLogin() {
        
        if (!this._betId) {
            console.log("missing betid from url, so redirects to create page");
            this._router.navigate(["/create-bet"]);
            return;
        }

        this._store.dispatch(this._actions.updateBetWithBuyin(this._betId, this.buyinDescription));

        this._router.navigate(["/login", this._betId]);
    }
}
