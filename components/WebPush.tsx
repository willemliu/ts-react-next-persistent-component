import { Log } from '../utils/log';
import { getClient } from '../utils/app';

export default function handleWebPush() {
    if (!Notification) {
        alert(
            'Desktop notifications not available in your browser. Try Chromium.'
        );
        return;
    }

    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    } else {
        const notification = new Notification(`Push message`, {
            icon: '/static/192x192.png',
            body: 'Test push message',
        });

        notification.onclick = () => {
            Log.info({
                client: getClient(),
                message: `Go to ${window.location.href}`,
            });
            notification.close();
        };
    }
}
