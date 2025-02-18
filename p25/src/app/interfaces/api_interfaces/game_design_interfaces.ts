export interface GameDesignContent {
    name: string;
    description: string;
    displayField: string;
    fields: Field[];
    sys: Sys;
}
  
interface Field {
    id: string;
    name: string;
    type: string;
    localized: boolean;
    required: boolean;
    validations: Validation[];
    disabled: boolean;
    omitted: boolean;
    items?: FieldItems;
}

interface FieldItems {
    type: string;
    validations: Validation[];
    linkType: string;
}
  
interface Validation {
    enabledMarks?: string[];
    enabledNodeTypes?: string[];
    in?: string[];
    linkMimetypeGroup?: string[];
    message?: string;
    nodes?: Record<string, any>;
}
  
interface Sys {
    space: {
    sys: {
        type: string;
        linkType: string;
        id: string;
    };
    };
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: {
    sys: {
        id: string;
        type: string;
        linkType: string;
    };
    };
    publishedVersion: number;
    publishedAt: string;
    firstPublishedAt: string;
    createdBy: {
    sys: {
        type: string;
        linkType: string;
        id: string;
    };
    };
    updatedBy: {
    sys: {
        type: string;
        linkType: string;
        id: string;
    };
    };
    publishedCounter: number;
    version: number;
    publishedBy: {
    sys: {
        type: string;
        linkType: string;
        id: string;
    };
    };
    urn: string;
}
  