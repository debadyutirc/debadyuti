module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'debadyuti',
    user: process.env.DB_USER || 'debadyuti',
    password: process.env.DB_PASS || 'debadyuti',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './debadyuti.sqlite'
    }
  }
}
