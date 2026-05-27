import { useQuery } from "@tanstack/react-query"
import axios from "axios";

export const CalendarView = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['Todos'],
        queryFn: () => axios.get('http://localhost:3000/api/calendar'),
    })

    if (isLoading) return <p>Loading ....</p>
    if (error) return <p>Error !!</p>

    return <p>
        {JSON.stringify(data)}
    </p>

}