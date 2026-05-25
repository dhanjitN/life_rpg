import { Button } from "@/components/ui/button";
import { getCalendarAccess } from "@/lib/auth-client";
export default function StatusPage (){
    return (
        <h3>
            <Button onClick={getCalendarAccess}>Link Calendar </Button>
        </h3>
    )
}