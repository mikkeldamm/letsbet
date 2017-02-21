"use strict";
var application = require("application");
var utils = require("utils/utils");
function setStatusBarColors() {
    // Make the iOS status bar transparent with white text.
    if (application.ios) {
        application.on("launch", function () {
            /*
            console.log("FIRST console:");
            firebase.init({}).then(
                (instance) => {
                    console.log("firebase.init done");

                    firebase.push('/lars', { name: 'mikkel damm', age: 26});
                },
                (error) => {
                    console.log("firebase.init error: " + error);
                });
            */
            utils.ios.getter(UIApplication, UIApplication.sharedApplication).statusBarStyle = UIStatusBarStyle.LightContent;
        });
    }
}
exports.setStatusBarColors = setStatusBarColors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXR1cy1iYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlDQUEyQztBQUUzQyxtQ0FBcUM7QUFVckM7SUFDSSx1REFBdUQ7SUFDdkQsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEIsV0FBVyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFFckI7Ozs7Ozs7Ozs7O2NBV0U7WUFFRixLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsY0FBYyxHQUFHLGdCQUFnQixDQUFDLFlBQVksQ0FBQztRQUNwSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7QUFDTCxDQUFDO0FBckJELGdEQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0ICogYXMgcGxhdGZvcm0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcbmltcG9ydCAqIGFzIGZyYW1lTW9kdWxlIGZyb20gXCJ1aS9mcmFtZVwiO1xuXG4vL2ltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XG5cbmRlY2xhcmUgdmFyIGFuZHJvaWQ6IGFueTtcbmRlY2xhcmUgdmFyIFVJU3RhdHVzQmFyU3R5bGU6IGFueTtcbmRlY2xhcmUgdmFyIFVJQXBwbGljYXRpb246IGFueTtcbmRlY2xhcmUgdmFyIFVJQ29sb3I6IGFueTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0YXR1c0JhckNvbG9ycygpIHtcbiAgICAvLyBNYWtlIHRoZSBpT1Mgc3RhdHVzIGJhciB0cmFuc3BhcmVudCB3aXRoIHdoaXRlIHRleHQuXG4gICAgaWYgKGFwcGxpY2F0aW9uLmlvcykge1xuICAgICAgICBhcHBsaWNhdGlvbi5vbihcImxhdW5jaFwiLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZJUlNUIGNvbnNvbGU6XCIpO1xuICAgICAgICAgICAgZmlyZWJhc2UuaW5pdCh7fSkudGhlbihcbiAgICAgICAgICAgICAgICAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UucHVzaCgnL2xhcnMnLCB7IG5hbWU6ICdtaWtrZWwgZGFtbScsIGFnZTogMjZ9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZXJyb3I6IFwiICsgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgdXRpbHMuaW9zLmdldHRlcihVSUFwcGxpY2F0aW9uLCBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKS5zdGF0dXNCYXJTdHlsZSA9IFVJU3RhdHVzQmFyU3R5bGUuTGlnaHRDb250ZW50O1xuICAgICAgICB9KTtcbiAgICB9XG59Il19