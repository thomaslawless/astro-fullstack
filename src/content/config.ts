import { defineCollection } from "astro/content/runtime";
import { z } from "astro/zod";

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        date: z.date(),
    })
});

export const collections = {
    blog: blogCollection,
}