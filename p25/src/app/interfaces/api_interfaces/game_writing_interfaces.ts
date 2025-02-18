interface ContentfulLink {
    sys: {
      type: "Link";
      linkType: "Space" | "Environment" | "User";
      id: string;
    };
}
  
interface ContentfulSys {
    space: {
      sys: ContentfulLink;
    };
    id: string;
    type: "ContentType";
    createdAt: string;
    updatedAt: string;
    environment: {
      sys: ContentfulLink;
    };
    publishedVersion: number;
    publishedAt: string;
    firstPublishedAt: string;
    createdBy: {
      sys: ContentfulLink;
    };
    updatedBy: {
      sys: ContentfulLink;
    };
    publishedCounter: number;
    version: number;
    publishedBy: {
      sys: ContentfulLink;
    };
    urn: string;
}
  
type FieldValidationType = {
    in?: string[];
    message?: string;
    enabledMarks?: string[];
    enabledNodeTypes?: string[];
    nodes?: {
      [key: string]: Array<{
        size?: {
          max: number;
        };
        message?: string;
      }>;
    };
}

interface ContentfulField {
    id: string;
    name: string;
    type: "Symbol" | "RichText";
    localized?: boolean;
    required?: boolean;
    validations: FieldValidationType[];
    disabled?: boolean;
    omitted?: boolean;
  }
  
export interface GameWritingContent {
    name: string;
    description: string;
    displayField: string;
    fields: ContentfulField[];
    sys: ContentfulSys;
}