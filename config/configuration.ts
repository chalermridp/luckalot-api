export default () => ({
  server: {
    port: parseInt(process.env.SERVER_PORT, 10) || 3001,
  },
  db: {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
});
