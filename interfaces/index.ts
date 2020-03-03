export type IBLogMeta = (metaPath: string, fileMeta: string[]) => any;

export interface IBlogPost {
  title: string;
  summary: string;
  imageUrl: string;
  readTime: string;
  fileName: string;
  tags: string[];
  createdAt: string;
}

export type IArticleCardProps = {
  data: IBlogPost[];
};
