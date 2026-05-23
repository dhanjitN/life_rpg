import { sql } from 'drizzle-orm'
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core'
import { users } from './users'

export const goal = sqliteTable('goal', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id).unique(),
  title: text('title').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`),
})

export const dailyScores = sqliteTable('daily_scores', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id),
  goalId: text('goal_id').notNull().references(() => goal.id),
  date: text('date').notNull(),
  score: integer('score').notNull(),
  reason: text('reason').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`),
})