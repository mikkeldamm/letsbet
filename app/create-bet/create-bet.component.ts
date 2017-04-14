import { Component, ElementRef, ViewChild, AfterViewInit, OnInit, OnDestroy } from "@angular/core";
import { Store } from '@ngrx/store';

import { RouterExtensions } from 'nativescript-angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Page } from "ui/page";
import { TextField } from "ui/text-field";

import { Actions } from '../store/app.actions';
import { AppState } from '../store/app.state';
import { Bet } from '../store/bet.model';

import { KeyboardObserver } from '../utils/keyboard-observer';
import { guidGenerator } from '../utils/id-generator';

@Component({
    selector: "create-bet",
    moduleId: module.id,
    templateUrl: "./create-bet.component.html",
    styleUrls: ["./create-bet-common.css"]
})
export class CreateBetComponent implements OnInit, OnDestroy, AfterViewInit {

    @ViewChild("textContainer") textContainer: ElementRef;
    @ViewChild("textPushContainer") textPushContainer: ElementRef;

    public betDescription: string = '';

    private _keyboardHeightChangeSubscription: Subscription;

    constructor(private _page: Page,
                private _router: RouterExtensions,
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

    public changeDescription(description: string) {

        this.betDescription = description;
    }

    public onGoToCreateBuyin() {
        
        const newBet: Bet = {
            id: guidGenerator(),
            description: this.betDescription,
            buyin: null,
            opponentId: null
        };

        this._store.dispatch(this._actions.addBetWithDescription(newBet))

        this._router.navigate(["/create-buyin", newBet.id]);
    }

    private prepareTextField() {

        const textField = this.textContainer.nativeElement as TextField;
        if (textField) {

            textField.ios.keyboardAppearance = UIKeyboardAppearanceDark;
            textField.ios.autocorrectionType = UITextAutocorrectionTypeNo;
            textField.ios.inputAccessoryView = UIView.alloc().init();
            textField.focus();
        }
    }
}