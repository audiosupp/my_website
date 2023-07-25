// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      tags: z.array(z.string())
    })
});

const blogCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    cover: image().refine((img) => img.width >= 1080, {
      message: "Cover image must be at least 1080 pixels wide!",
    }),
    coverAlt: z.string(),
  }),
});


// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  blog: blogCollection
};

