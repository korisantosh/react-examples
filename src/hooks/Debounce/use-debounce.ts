import { useState, useEffect } from "react";

export const useDebounce = <T>(value: T | (() => T), delay = 800) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [value, delay]);
    return debouncedValue;
};

export default useDebounce;