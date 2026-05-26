import { authClient } from "@/lib/auth-client";

export const UserProfile = () => {
    const {data: session , isPending} = authClient.useSession()
    if(isPending) return <p>Loading....</p>
    if(!session) return <p>Not signed in..</p>

    return <p>Hello , {session.user.name}</p>
}