export type Header = {
    name: string;
    attribute: string | null;
    fieldName: string;
    description: string | null;
    type: string;
    redacted: boolean;
};

export type SampleData = {
    headers: Header[];
    rows: Record<string, string>[];
};

export interface SampleTableDataHeader {
    name: string;
    attribute: string | null; // Allow both string and null
    fieldName: string;
    description: string | null; // Apply similar fix if needed
    type: string;
    redacted: boolean;
}

export interface SampleTableDataHeader {
    name: string;
    attribute: string | null; // Allow both string and null
    fieldName: string;
    description: string | null; // Apply similar fix if needed
    type: string;
    redacted: boolean;
}

export interface CheckboxControllerProps {
    headers: SampleTableDataHeader[];
    filteredColumns: string[];
    onSelect: (fieldName: string) => void;
}


export interface Row {
    [key: string]: string;
}

export interface Metadata {
    id: string;
    technicalName: string[];
    businessName: string;
    businessDescription: string;
}
