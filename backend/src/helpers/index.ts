// Helper function to validate the timeframe format (e.g., "14:00-19:00")
export const isValidTimeframe = (timeframe: string): boolean => {
    const regEx = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]-([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return regEx.test(timeframe);
};