import { Button } from "@/components/ui/button";
import { getCalendarAccess } from "@/lib/auth-client";

import { UserProfile } from "@/components/user-profile";
import { CalendarView } from "@/components/calendar-view";

export default function StatusPage() {
    return (
        <section className=" dark  bg-background  min-h-screen text-foreground">
            <Button onClick={getCalendarAccess}>Link Calendar </Button>
            <UserProfile />
            <CalendarView/>
        </section>
    )
}