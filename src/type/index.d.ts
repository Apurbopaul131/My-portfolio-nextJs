export type TProject = {
  _id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  features: string;
  challenges: string;
  futureScope: string;
  image: string;
  liveLink: string;
  repoLink: string;
  technologies: string;
  author: string;
};
export type TBlog = {
  _id: string;
  author: string;
  category: string;
  content: string;
  image: string;
  publish_date: string; // ISO 8601 formatted date string
  title: string;
  blog_writter: string;
  total_likes: string;
};
