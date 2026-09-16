import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
const projects=defineCollection({loader:glob({pattern:'**/[^_]*.md',base:'./src/data/projects'}),schema:z.object({title:z.string(),category:z.enum(['Computer Vision','Edge & IoT','Robotics','Other']),summary:z.string().max(180),year:z.number(),status:z.enum(['shipped','in-progress','archived']).default('shipped'),repoUrl:z.string().url().optional(),demoVideo:z.string().optional(),coverImage:z.string().optional(),metrics:z.array(z.object({label:z.string(),value:z.string()})).optional(),featured:z.boolean().default(false),sortOrder:z.number().default(50)})});
const experience=defineCollection({loader:glob({pattern:'**/[^_]*.md',base:'./src/data/experience'}),schema:z.object({role:z.string(),org:z.string(),location:z.string().optional(),start:z.string(),end:z.string().optional(),highlights:z.array(z.string()),sortOrder:z.number().default(50)})});
const certifications=defineCollection({loader:glob({pattern:'**/[^_]*.md',base:'./src/data/certifications'}),schema:z.object({name:z.string(),issuer:z.string(),date:z.string(),dateLabel:z.string(),credentialId:z.string().optional(),verifyUrl:z.string().url().optional()})});
export const collections={projects,experience,certifications};
