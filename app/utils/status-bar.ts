import * as application from "application";
import * as platform from "platform";
import * as utils from "utils/utils";
import * as frameModule from "ui/frame";

import * as firebase from "nativescript-plugin-firebase";

declare var android: any;
declare var UIStatusBarStyle: any;
declare var UIApplication: any;
declare var UIColor: any;

export function setStatusBarColors() {
    // Make the iOS status bar transparent with white text.
    if (application.ios) {
        application.on("launch", () => {

            console.log("FIRST console:");
            
            

            utils.ios.getter(UIApplication, UIApplication.sharedApplication).statusBarStyle = UIStatusBarStyle.LightContent;
        });
    }
}