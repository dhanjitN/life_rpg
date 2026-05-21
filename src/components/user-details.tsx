"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export  function UserDetails() {
    const details = useQuery(api.messages.getForCurrentUser);
    return <div>
        {JSON.stringify(details)}
    </div>
}