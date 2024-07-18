// create CheckboxController component

import React from "react";
import {
    Checkbox,
    FormControlLabel as MUIFormControlLabel,
    FormControl as MUIFormControl,
    FormGroup,
    Grid,
    Typography,
    styled,
} from "@mui/material";
import { SampleTableDataHeader } from "./types/commonTypes";
import Search from "./Search";
import { useTextQuery } from "./hooks/TextQuery";


export interface CheckboxControllerProps {
    headers: SampleTableDataHeader[];
    filteredColumns: string[];
    onSelect: (fieldName: string) => void;
}

const CheckboxController: React.FC<CheckboxControllerProps> = ({
    headers,
    filteredColumns,
    onSelect,
}) => {
    const { textQuery, updateQuery } = useTextQuery();

    const filteredHeaders = headers.filter(({ name }) =>
        name.toLowerCase().includes(textQuery.toLowerCase())
    );

    const onEnter = (event: any, fieldName: string) => {
        if (event.key === "Enter" || event.keyCode === 13) {
            onSelect(fieldName);
        }
    };
    return (
        <Grid container direction="column">
            <SearchContainer>
                <Search
                    size="small"
                    placeholder="Filter columns..."
                    iconPosition="start"
                    value={textQuery}
                    onChange={updateQuery}
                />
            </SearchContainer>
            <FormControl>
                <FormGroup>
                    {filteredHeaders.map(({ name, fieldName }, index) => (
                        <FormControlLabel
                            key={index}
                            aria-labelledby={`${name}-label`}
                            control={
                                <Checkbox
                                    focusRipple
                                    checked={filteredColumns.includes(fieldName)}
                                    value={fieldName}
                                    onKeyUp={(event) => onEnter(event, fieldName)}
                                    onChange={() => {
                                        onSelect(fieldName);
                                    }}
                                />
                            }
                            label={
                                <Typography id={`${name}-label-text`} variant="body1">
                                    {name}
                                </Typography>
                            }
                        />
                    ))}
                </FormGroup>
            </FormControl>
        </Grid>
    );
};

const FormControl = styled(MUIFormControl)(({ theme }) => ({
    padding: "1rem",
    height: "270px",
    minWidth: "275px",
    overflow: "auto",
    backgroundColor: theme.palette.background.default,
}));

const FormControlLabel = styled(MUIFormControlLabel)({
    paddingBottom: ".5rem",
});

const SearchContainer = styled(Grid)({
    padding: ".5rem 1rem",
    flexDirection: "column",
});


export default CheckboxController;
