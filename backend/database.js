import pg from "pg";

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "IHMS24",
    password: "system",
    port: 5432
});

db.connect();

export default db;