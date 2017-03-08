"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application = require("application");
function setStatusBarColors() {
    // Make the iOS status bar transparent with white text.
    if (application.ios) {
        application.on("launch", function () {
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
exports.setStatusBarColors = setStatusBarColors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXR1cy1iYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBMkM7QUFJM0M7SUFDSSx1REFBdUQ7SUFDdkQsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEIsV0FBVyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFFckI7Ozs7Ozs7Ozs7Ozs7Y0FhRTtRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztBQUNMLENBQUM7QUFyQkQsZ0RBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0U3RhdHVzQmFyQ29sb3JzKCkge1xuICAgIC8vIE1ha2UgdGhlIGlPUyBzdGF0dXMgYmFyIHRyYW5zcGFyZW50IHdpdGggd2hpdGUgdGV4dC5cbiAgICBpZiAoYXBwbGljYXRpb24uaW9zKSB7XG4gICAgICAgIGFwcGxpY2F0aW9uLm9uKFwibGF1bmNoXCIsICgpID0+IHtcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIHV0aWxzLmlvcy5nZXR0ZXIoVUlBcHBsaWNhdGlvbiwgVUlBcHBsaWNhdGlvbi5zaGFyZWRBcHBsaWNhdGlvbikuc3RhdHVzQmFyU3R5bGUgPSBVSVN0YXR1c0JhclN0eWxlLkxpZ2h0Q29udGVudDtcblxuICAgICAgICAgICAgVG5zT25lU2lnbmFsLmluaXRXaXRoTGF1bmNoT3B0aW9uc0FwcElkSGFuZGxlTm90aWZpY2F0aW9uUmVjZWl2ZWRIYW5kbGVOb3RpZmljYXRpb25BY3Rpb25TZXR0aW5ncyhsYXVuY2hPcHRpb25zLCAnYjA3NjU5ZTktNzg2OS00MzdkLWJhZGYtZDYyYTg3ODQxNGE4JywgKGEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFcIik7XG4gICAgICAgICAgICB9LCAoYikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYlwiKTtcbiAgICAgICAgICAgIH0sIG51bGwpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBUbnNPbmVTaWduYWwuSWRzQXZhaWxhYmxlKCh1c2VySWQsIHRva2VuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VySWQ6IFwiICsgdXNlcklkKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRva2VuOiBcIiArIHRva2VuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgKi9cbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==