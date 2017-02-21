import { Observable } from 'rxjs/Observable';

import * as application from "application";

export class KeyboardObserver {

    public heightChange$(): Observable<number> {

        return Observable.create((observer) => {

            const iosObserver = application.ios.addNotificationObserver(UIKeyboardWillChangeFrameNotification, (notification) => {
                const height = notification.userInfo.valueForKey(UIKeyboardFrameEndUserInfoKey).CGRectValue.size.height;
                observer.next(height);
            });

            return () => {
                application.ios.removeNotificationObserver(iosObserver, UIKeyboardWillChangeFrameNotification);
            }
        });
    }
}
