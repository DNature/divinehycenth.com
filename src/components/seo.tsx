import React from 'react';
import { NextSeo } from 'next-seo';
import siteConfig from 'configs/site-config';
import { FrontMatter } from 'types/global';

const SEO = ({ title, description }) => (
  <NextSeo
    title={title}
    description={description}
    titleTemplate={siteConfig.seo.titleTemplate}
  />
);

export const ArticleSEO = (props: FrontMatter) => {
  const {
    title,
    description,
    tags,
    slug,
    published: { date: _date = '' },
    lastEdited: { date = '' },
    imageUrl,
    auth: { websiteUrl },
  } = props;
  return (
    <NextSeo
      title={title}
      description={description}
      titleTemplate={siteConfig.article.titleTemplate}
      openGraph={{
        ...siteConfig.article.openGraph,
        url: `${siteConfig.seo.siteUrl}${slug}`,
        type: 'article',
        article: {
          publishedTime: _date,
          modifiedTime: date,
          authors: [`${websiteUrl}/about`],
          tags,
        },
        images: [
          {
            url: imageUrl,
            width: 1240,
            height: 480,
            alt: title,
          },
          {
            url: imageUrl,
            width: 1012,
            height: 506,
            alt: title,
          },
        ],
      }}
    />
  );
};

export default SEO;
