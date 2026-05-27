
import axios from "axios"
import { useEffect } from "react";

export const getCalendarEvents = () => {
    const url = "http://localhost:3000/api/calendar";
    let data = null, error = null, isLoading = true;

    useEffect(() => {
        (async () => {
            try {
                data = await axios.get(url);
            } catch (err) {
                error = err;
            } finally {
                isLoading = false;
            }
        })()
    }, [])


    return {
        data,
        error,
        isLoading
    };
}