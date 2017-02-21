"use strict";
var Observable_1 = require("rxjs/Observable");
var application = require("application");
var KeyboardObserver = (function () {
    function KeyboardObserver() {
    }
    KeyboardObserver.prototype.heightChange$ = function () {
        return Observable_1.Observable.create(function (observer) {
            var iosObserver = application.ios.addNotificationObserver(UIKeyboardWillChangeFrameNotification, function (notification) {
                var height = notification.userInfo.valueForKey(UIKeyboardFrameEndUserInfoKey).CGRectValue.size.height;
                observer.next(height);
            });
            return function () {
                application.ios.removeNotificationObserver(iosObserver, UIKeyboardWillChangeFrameNotification);
            };
        });
    };
    return KeyboardObserver;
}());
exports.KeyboardObserver = KeyboardObserver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQtb2JzZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJrZXlib2FyZC1vYnNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOENBQTZDO0FBRTdDLHlDQUEyQztBQUUzQztJQUFBO0lBZ0JBLENBQUM7SUFkVSx3Q0FBYSxHQUFwQjtRQUVJLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQVE7WUFFOUIsSUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxxQ0FBcUMsRUFBRSxVQUFDLFlBQVk7Z0JBQzVHLElBQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLDZCQUE2QixDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ3hHLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUM7Z0JBQ0gsV0FBVyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLEVBQUUscUNBQXFDLENBQUMsQ0FBQztZQUNuRyxDQUFDLENBQUE7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmRPYnNlcnZlciB7XG5cbiAgICBwdWJsaWMgaGVpZ2h0Q2hhbmdlJCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXIpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgaW9zT2JzZXJ2ZXIgPSBhcHBsaWNhdGlvbi5pb3MuYWRkTm90aWZpY2F0aW9uT2JzZXJ2ZXIoVUlLZXlib2FyZFdpbGxDaGFuZ2VGcmFtZU5vdGlmaWNhdGlvbiwgKG5vdGlmaWNhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IG5vdGlmaWNhdGlvbi51c2VySW5mby52YWx1ZUZvcktleShVSUtleWJvYXJkRnJhbWVFbmRVc2VySW5mb0tleSkuQ0dSZWN0VmFsdWUuc2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChoZWlnaHQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uaW9zLnJlbW92ZU5vdGlmaWNhdGlvbk9ic2VydmVyKGlvc09ic2VydmVyLCBVSUtleWJvYXJkV2lsbENoYW5nZUZyYW1lTm90aWZpY2F0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19