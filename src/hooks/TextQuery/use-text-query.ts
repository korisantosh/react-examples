import { useEffect, useState, ChangeEvent } from "react";
import { useDebounce } from "../Debounce";

interface GaOption {
    category: string;
    action: string;
    labels: string[];
}

export const useTextQuery = (initialString?: string, gaOptions?: GaOption) => {
    const [textQuery, setTextQuery] = useState(initialString || "");
    const debouncedQuery = useDebounce(textQuery);

    useEffect(() => {
        if (initialString !== undefined) {
            setTextQuery(initialString);
        }
    }, [initialString]);

    useEffect(() => {
        if (!gaOptions) return;
        const { category, action, labels } = gaOptions;

        if (debouncedQuery) {
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedQuery]);

    const updateQuery = (event: ChangeEvent<HTMLInputElement>) => {
        setTextQuery(event.target.value);
    };

    const resetQuery = () => setTextQuery("");

    return { textQuery, updateQuery, resetQuery };
};