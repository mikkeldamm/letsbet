import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";

import { RouterExtensions } from "nativescript-angular/router";

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
import { iOSApplication } from "application";

@Component({
    selector: "create-buyin",
    moduleId: module.id,
    templateUrl: "./create-buyin.component.html",
    styleUrls: [ "./create-buyin-common.css" ]
})
export class CreateBuyinComponent implements AfterViewInit {

    @ViewChild("textContainer") textContainer: ElementRef;
    @ViewChild("textPushContainer") textPushContainer: ElementRef;

    public buyinDescription: string = "";

    constructor(private _page: Page, private _router: Router, private _routerExtensions: RouterExtensions) {

        this._page.actionBarHidden = true;
        this._page.enableSwipeBackNavigation = false;
        this._page.backgroundSpanUnderStatusBar = true;

        this._page.on("navigatingTo", () => {
            this.test();
        });
    }

    public ngAfterViewInit() {

        this.test();
    }

    public test() {

        application.ios.addNotificationObserver(UIKeyboardWillChangeFrameNotification, (notification) => {
            let height = notification.userInfo.valueForKey(UIKeyboardFrameEndUserInfoKey).CGRectValue.size.height;
            console.log("HEIGHT: " + height + "px");
            this.textPushContainer.nativeElement.height = height;
        });

        const textField = this.textContainer.nativeElement as TextField;
        if (textField) {

            textField.ios.keyboardAppearance = UIKeyboardAppearanceDark;
            textField.ios.autocorrectionType = UITextAutocorrectionTypeNo;
            textField.ios.inputAccessoryView = UIView.alloc().init();
            textField.focus();
        }
    }

    public onTap() {


        const textField = this.textContainer.nativeElement as TextField;
        if (textField) {
            //textField.dismissSoftInput();
        }
                
        this._routerExtensions.navigate(["/create-bet"]);
    }
}