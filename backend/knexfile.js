module.exports = {
  client: "postgresql",
  connection: {
    database: "knowledge",
    user: "postgres",
    password: "qweasd123",
  },
  pool: {
    min: 2,
    max: 6,
    createTimeoutMillis: 3000,
    acquireTimeoutMillis: 30000,
    idleTimeoutMillis: 30000,
    reapIntervalMillis: 1000,
    createRetryIntervalMillis: 100,
    propagateCreateError: false 
  },
  migrations: {
    tableName: "knex_migrations",
  },
};