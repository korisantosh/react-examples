import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

interface SearchProps {
    size?: "small" | "medium";
    placeholder?: string;
    iconPosition?: "start" | "end";
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({
    size = "small",
    placeholder = "Filter columns...",
    iconPosition = "start",
    value,
    onChange,
}) => {
    return (
        <TextField
            size={size}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            InputProps={{
                startAdornment: iconPosition === "start" && (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
                endAdornment: iconPosition === "end" && (
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default Search;
