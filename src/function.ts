import mysql, { PoolConnection } from "mysql2";

export class MySqlConfig {
    private pool: mysql.Pool;

    constructor(connectionString: string) {
        if (!connectionString) {
            throw new Error('Connection string is required.');
        }
        this.pool = mysql.createPool(connectionString);
    }

    async importTable(query: string): Promise<any> {
        await this.pool.getConnection(async (err, result) => {
            try {
                return await result.query(query);;
            } catch (error) {
                console.error('Error executing query:', error);
                throw error;
            } finally {
                result.release(); // Release the connection back to the pool
            }
        });
    }
}