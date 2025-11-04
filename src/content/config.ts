import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

const experience = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    period: z.string(),
    location: z.string().optional(),
    tech: z.array(z.string()).default([]),
    link: z.string().url().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { projects, experience };
