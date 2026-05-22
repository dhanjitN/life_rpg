# 7-Day Developer Roadmap

## Day 1 — Project scaffold + auth working
Goal: Google login works, you can see your user in the DB.
- Init monorepo with pnpm workspaces
- Set up Hono API + Vite React app
- Set up Turso + Drizzle, create users and accounts tables
- Wire Better Auth with Google OAuth
- Test: login with Google → user row appears in DB
- .env with all keys set up
### Done when: you can log in and log out.

## Day 2 — Goals feature
Goal: Users can create and view their long-term goals.
- Add goals table — id, user_id, title, created_at
- API route: POST /api/goals, GET /api/goals
- Frontend: a simple form to add a goal, list of goals on screen
- No design yet — ugly is fine
### Done when: you can type "launch my startup" and see it saved.


## Day 3 — Google Calendar integration
Goal: Fetch today's calendar events for the logged-in user.
- Pull Google access token from accounts table
- Build GET /api/calendar/events?date=today route
- Call Google Calendar API, return events (title, description, color, duration)
- Log the raw response, make sure it works
- Handle token refresh if expired
### Done when: your calendar events for today show up in the terminal/console.

## Day 4 — Gemini scoring
Goal: Given events + goals, get a score out of 10.
- Build POST /api/ai/score route
- Send Gemini: the user's goals + today's calendar events
- Prompt Gemini to return JSON — { goal_id, score, reason } for each goal
- Save results to a new daily_scores table — id, user_id, goal_id, date, score, reason, raw_events
- Test with your own calendar + your own goal
### Done when: Gemini returns a score and reason you'd actually believe.

## Day 5 — The status screen
Goal: The core UI — your daily dashboard.
- Design and build the main screen with shadcn/ui
- Show: list of goals, today's score per goal (X/10), Gemini's reason
- Show: total hours worked today (sum of event durations)
- A simple timeline or list of today's events
- Mobile-friendly — you'll check this on your phone

### Done when: it looks good enough to screenshot and send to your two friends.

## Day 6 — Polish + invite friends
Goal: App works for 3 people.
- Add a "refresh" button that re-fetches calendar + re-scores
- Handle edge cases — no events today, no goals set, token expired
- Add loading states so it doesn't feel broken
-  Deploy: Hono API on Railway or Fly.io, Web on Vercel
-  Share the link with your two friends, watch them log in

### Done when: all three of you are logged in and seeing your own scores.

Day 7 — Buffer + history
Goal: Don't lose what you built. Add one bonus feature.

Fix bugs your friends found
Add a simple history view — past 7 days of scores per goal
A streak counter — how many days in a row you scored above 5
Write a short README so you remember how everything works

Done when: you've used it for a full day yourself and it felt useful.
