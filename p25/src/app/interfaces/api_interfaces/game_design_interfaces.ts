// types/contentful.ts

interface Sys {
    space: {
      sys: {
        type: 'Link';
        linkType: 'Space';
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
        type: 'Link';
        linkType: 'Environment';
      };
    };
    publishedVersion: number;
    revision: number;
    contentType?: {
      sys: {
        type: 'Link';
        linkType: 'ContentType';
        id: string;
      };
    };
    locale: string;
  }
  
  interface Asset {
    metadata: {
      tags: string[];
      concepts: any[];
    };
    sys: Sys;
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
  
  interface RichTextContent {
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
  
  export interface GameDesignEntry {
    contentTypeId: 'gameDesign';
    metadata: {
      tags: string[];
      concepts: any[];
    };
    sys: Sys;
    fields: {
      title: string;
      status: string;
      overview: RichTextContent;
      screenshots: Asset[];
      designDocs: Asset[];
      genre: string[];
    };
  }