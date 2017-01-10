export class BlogPost {
  id: number;
  title: string;
  publishDate: string;
  labels: string[];
  content: string;   // can contain html
  comments: Comment[];
}

export class Comment {
  body: string;
  author: string;
}

export interface TestPost {
  id: number;
  title: string;
  body: string;
}

export interface BloggerPostsList {
  kind?: string;
  items?: BloggerPost[];
  etag?: string;
}

export interface BloggerPost {
  kind?: string;
  id: string;
  blog?: {
    id: string;
  };
  published?: string;
  updated?: string;
  etag?: string;
  url?: string;
  selfLink?: string;
  title: string;
  content: string;
  author?: {
    id: string;
    displayName: string;
    url: string;
    image: {
      url: string;
    }
  };
  replies?: {
    totalItems: string;
    selfLink: string;
  }
  labels?: string[];
}