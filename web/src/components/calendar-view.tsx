import { useCalendarEvents } from "@/hooks/useCalendarEvents"

export const CalendarView = () => {
    const {isLoading, error, data} =  useCalendarEvents();
    console.log(isLoading, error, data);
    
}