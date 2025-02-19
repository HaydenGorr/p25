// Contentful Rich Text types
export interface RichTextContent {
  data: Record<string, any>;
  content: {
    data: Record<string, any>;
    content: {
      data: Record<string, any>;
      marks: any[];
      value: string;
      nodeType: string;
    }[];
    nodeType: string;
  }[];
  nodeType: string;
}

// Contentful Asset System type
export interface ContentfulSys {
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
  revision: number;
  locale: string;
}

// Contentful Asset type
export interface ContentfulAsset {
  metadata: {
    tags: string[];
    concepts: any[];
  };
  sys: ContentfulSys;
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

// Game Entry Fields type
export interface GameEntryFields {
  title: string;
  status: string;
  overview: RichTextContent;
  screenshots: ContentfulAsset[];
  designDocs: ContentfulAsset[];
  genre: string[];
}

// Contentful Entry Skeleton type
export interface GameEntrySkeletonType {
  contentTypeId: 'gameDesign'; // Replace with your actual content type ID
  fields: GameEntryFields;
  sys: ContentfulSys;
}

// Hook state type
type ContentState = GameEntrySkeletonType[];