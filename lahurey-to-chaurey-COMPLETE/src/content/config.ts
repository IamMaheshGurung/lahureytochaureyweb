import { defineCollection, z } from 'astro:content';

const stories = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    category: z.string(),
    type: z.string(),
    language: z.string(),
    date: z.coerce.date(),
    readTime: z.string(),
    heroImage: z.string().optional(),
    summaryWhat: z.string().optional(),
    summaryWhy: z.string().optional(),
    summaryLesson: z.string().optional(),
  }),
});

const pulse = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
  }),
});

export const collections = { stories, pulse };
