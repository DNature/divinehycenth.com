export type IBLogMeta = (metaPath: string, fileMeta: string[]) => any;

export interface IBlogPost {
  title: string;
  summary: string;
  readTime: string;
  fileName: string;
  tags: string[];
  createdAt: string;
  author: {
    name: string;
    imageUrl: string;
  };
}

export type IArticleCardProps = {
  data: IBlogPost[];
};

export interface IAuthorMeta {
  data: IBlogPost;
}
