import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bitacora = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/bitacora' }),
  schema: z.object({
    title: z.string(),
    lead: z.string(),
    category: z.enum(['ensayos', 'notas-de-campo', 'procesos', 'glosario']),
    publishDate: z.date(),
    readingTime: z.number().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = { bitacora };
