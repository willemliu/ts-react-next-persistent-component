export default function handleWebPush() {
    if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.');
        return;
    }

    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    } else {
        const notification = new Notification(`Push message`, {
            icon: '/static/192x192.png',
            body: 'Test push message'
        });

        notification.onclick = function () {
            console.debug('Go to', window.location.href);
            notification.close();
        };
    }
}
