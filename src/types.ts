export type userDetails = {
    name: string | string;
    age: number | null;
}
export type connectionCredential = {
    userName?: string | undefined;
    password?: string | undefined;
    port?: string | number | undefined;
    host?: string | undefined;
    url?: string | undefined;
    waitForConnections?: boolean,
    connectionLimit?: number,
    queueLimit?: number
}