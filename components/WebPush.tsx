export default function handleMessage(payload: any) {
    if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.');
        return;
    }

    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    } else if (payload) {
        const notification = new Notification(`Push message - ${payload}`, {
            icon: '/static/192x192.png',
            body: payload,
        });

        notification.onclick = function () {
            console.debug('Go to', payload);
            notification.close();
        };
    }
}
