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