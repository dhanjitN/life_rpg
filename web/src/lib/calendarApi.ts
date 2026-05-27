
import axios from "axios"

export const getCalendarEvents = () => {
    const url = "";
    let data = null, error = null, isLoading = true;

    const getDetails = async () => {
        try {
            data = await axios.get(url);
        } catch (err) {
            error = err;
        } finally {
            isLoading = false
        }
    }
    getDetails();

    return {
        data,
        error,
        isLoading
    };
}