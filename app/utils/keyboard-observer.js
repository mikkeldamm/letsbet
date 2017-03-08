"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQtb2JzZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJrZXlib2FyZC1vYnNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUU3Qyx5Q0FBMkM7QUFFM0M7SUFBQTtJQWdCQSxDQUFDO0lBZFUsd0NBQWEsR0FBcEI7UUFFSSxNQUFNLENBQUMsdUJBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQyxRQUFRO1lBRTlCLElBQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMscUNBQXFDLEVBQUUsVUFBQyxZQUFZO2dCQUM1RyxJQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUN4RyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDO2dCQUNILFdBQVcsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsV0FBVyxFQUFFLHFDQUFxQyxDQUFDLENBQUM7WUFDbkcsQ0FBQyxDQUFBO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBaEJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwiYXBwbGljYXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIEtleWJvYXJkT2JzZXJ2ZXIge1xuXG4gICAgcHVibGljIGhlaWdodENoYW5nZSQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGlvc09ic2VydmVyID0gYXBwbGljYXRpb24uaW9zLmFkZE5vdGlmaWNhdGlvbk9ic2VydmVyKFVJS2V5Ym9hcmRXaWxsQ2hhbmdlRnJhbWVOb3RpZmljYXRpb24sIChub3RpZmljYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBub3RpZmljYXRpb24udXNlckluZm8udmFsdWVGb3JLZXkoVUlLZXlib2FyZEZyYW1lRW5kVXNlckluZm9LZXkpLkNHUmVjdFZhbHVlLnNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoaGVpZ2h0KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmlvcy5yZW1vdmVOb3RpZmljYXRpb25PYnNlcnZlcihpb3NPYnNlcnZlciwgVUlLZXlib2FyZFdpbGxDaGFuZ2VGcmFtZU5vdGlmaWNhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==