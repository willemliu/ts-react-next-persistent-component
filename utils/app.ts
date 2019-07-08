export let IS_SERVER = false;
export let CLIENT = 'WEB';

export function setClient(client: string) {
    CLIENT = client;
}

export function getClient() {
    return CLIENT;
}

export function setIsServer(isServer: boolean) {
    IS_SERVER = isServer;
}

export function getIsServer() {
    return IS_SERVER;
}
