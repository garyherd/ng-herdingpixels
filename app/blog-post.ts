export interface BlogPost {
  id: string;
  title: string;
  publishDate: string;
  labels?: string[];
  content: string;   // can contain html
  comments?: Comment[];
}

export interface Comment {
  body: string;
  author: string;
}