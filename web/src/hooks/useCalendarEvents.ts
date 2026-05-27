import { getCalendarEvents } from "@/lib/calendarApi";

export const useCalendarEvents = () => {
    const {data, error, isLoading} =  getCalendarEvents();

    return {
        isLoading,
        error,
        data,
    }

}