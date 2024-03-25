declare class MySqlConfig {
    private pool;
    constructor(connectionString: string);
    importTable(query: string): Promise<any>;
}

type userDetails = {
    name: string | string;
    age: number | null;
};
type connectionCredential = {
    userName?: string | undefined;
    password?: string | undefined;
    port?: string | number | undefined;
    host?: string | undefined;
    url?: string | undefined;
    waitForConnections?: boolean;
    connectionLimit?: number;
    queueLimit?: number;
};

export { MySqlConfig, type connectionCredential, type userDetails };
