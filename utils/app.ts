export let CLIENT = 'WEB';

export function setClient(client: string) {
    CLIENT = client;
}

export function getClient() {
    return CLIENT;
}
