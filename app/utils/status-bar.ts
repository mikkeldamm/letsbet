import * as application from "application";
import * as platform from "platform";
import * as utils from "utils/utils";

export function setStatusBarColors() {
    // Make the iOS status bar transparent with white text.
    if (application.ios) {
        application.on("launch", () => {

            /*
            utils.ios.getter(UIApplication, UIApplication.sharedApplication).statusBarStyle = UIStatusBarStyle.LightContent;

            TnsOneSignal.initWithLaunchOptionsAppIdHandleNotificationReceivedHandleNotificationActionSettings(launchOptions, 'b07659e9-7869-437d-badf-d62a878414a8', (a) => {
                console.log("a");
            }, (b) => {
                console.log("b");
            }, null);
            
            TnsOneSignal.IdsAvailable((userId, token) => {
                console.log("UserId: " + userId);
                console.log("Token: " + token);
            });
            */
        });
    }
}