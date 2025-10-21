// keepalive.js
import { Client } from "pg";

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function main() {
  await client.connect();
  console.log("Keep-alive connected to DB");

  setInterval(async () => {
    try {
      await client.query("SELECT 1;");
      console.log("Ping sent to DB");
    } catch (err) {
      console.error("Ping failed:", err.message);
    }
  }, 120000); // каждые 2 минуты
}

main().catch(console.error);
