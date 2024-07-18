import React, { useState, MouseEvent } from "react";
import {
    Typography,
    Button,
    Popover,
    styled,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckboxController from "./CheckboxController";
import { SampleTableDataHeader } from "./types/commonTypes";

export interface ColumnsMenuProps {
    headers: SampleTableDataHeader[];
    filteredColumns: string[];
    onSelect: (fieldName: string) => void;
    reset: () => void;
}

const ColumnsMenu: React.FC<ColumnsMenuProps> = ({
    headers,
    filteredColumns,
    onSelect,
    reset,
}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (fieldName: string) => {
        onSelect(fieldName);
        handleClose();
    };

    const numberOfColumns =
        filteredColumns.length === 0 ? (
            "All"
        ) : (
            <Count>{filteredColumns.length}</Count>
        );

    return (
        <>
            <ColumnsButton
                size="small"
                variant="outlined"
                aria-controls="columns-menu"
                aria-haspopup="true"
                disableRipple
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                <ShowingColumnsDropdown style={{ fontWeight: 500 }} variant="body1">
                    Showing {numberOfColumns} Columns
                </ShowingColumnsDropdown>
            </ColumnsButton>

            {numberOfColumns !== "All" && filteredColumns.length < headers.length && (
                <Button size="small" color="primary" onClick={reset}>
                    <ClearFilters color="primary" variant="body2">
                        Show All Columns
                    </ClearFilters>
                </Button>
            )}

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                <CheckboxController
                    headers={headers}
                    filteredColumns={filteredColumns}
                    onSelect={handleSelect}
                    />
            </Popover>
        </>
    );
};

const ColumnsButton = styled(Button)(({ theme }) => ({
    borderRadius: "3rem",
    padding: ".5rem 1rem .5rem .8rem",
    fontWeight: 500,
    marginRight: ".5rem",
    border: "none",
    "&:hover": {
        borderRadius: "3rem",
    },
    "&:focus": {
        borderRadius: "3rem",
        backgroundColor: theme.palette.background.default,
    },
    "& svg": {
        fontSize: "1rem",
        marginTop: "4px",
    },
}));

const Count = styled("span")(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: ".875rem",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "1rem",
    padding: ".25rem .5rem",
    height: "1.25rem",
}));

const ClearFilters = styled(Typography)({
    textDecoration: "underline",
});

const ShowingColumnsDropdown = styled(Typography)({
    fontSize: "0.875rem",
});

export default ColumnsMenu;
