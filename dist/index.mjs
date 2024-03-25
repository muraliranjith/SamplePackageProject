// src/function.ts
import mysql from "mysql2";
var MySqlConfig = class {
  pool;
  constructor(connectionString) {
    if (!connectionString) {
      throw new Error("Connection string is required.");
    }
    this.pool = mysql.createPool(connectionString);
  }
  async importTable(query) {
    await this.pool.getConnection(async (err, result) => {
      try {
        return await result.query(query);
        ;
      } catch (error) {
        console.error("Error executing query:", error);
        throw error;
      } finally {
        result.release();
      }
    });
  }
};
export {
  MySqlConfig
};
