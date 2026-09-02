import { fileURLToPath } from "node:url";
import { config } from "dotenv";

// Load the monorepo-root .env regardless of the process's cwd
// (apps/api has no .env of its own, and dotenv/config resolves
// relative to process.cwd(), which turbo/tsx set to apps/api).
// Imported first in server.ts so it runs before anything that
// reads process.env at module-load time (e.g. the db client).
config({ path: fileURLToPath(new URL("../../../.env", import.meta.url)) });
