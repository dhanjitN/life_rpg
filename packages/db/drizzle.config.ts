import type { Config } from 'drizzle-kit'
import * as dotenv from 'dotenv'
import { resolve } from 'path'

dotenv.config({ path: resolve(process.cwd(), '../../.env') })

console.log('URL:', process.env.TURSO_DATABASE_URL)
console.log('TOKEN:', process.env.TURSO_AUTH_TOKEN)

export default {
  schema: './schema/index.ts',
  out: './migrations',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
} satisfies Config