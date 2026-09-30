import { defineCollection } from 'astro:content';
import { ALL_AUTHORED_ARTICLES } from './content/index';

const reference = defineCollection({
  loader: async () => {
    return ALL_AUTHORED_ARTICLES.map((article) => ({
      ...article,
      id: article.slug.replace(/^\/|\/$/g, ''),
      numericId: article.id,
    }));
  },
});

export const collections = { reference };
