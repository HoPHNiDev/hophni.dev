import { defineCollection, z } from "astro:content";

const experience = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    period: z.string(),
    stack: z.array(z.string()),
    order: z.number(),
    current: z.boolean().optional().default(false),
    description: z.string().optional(),
  }),
});

const hero = defineCollection({
  type: "content",
  schema: z.object({
    role: z.string(),
    username: z.string().default("user"),
    hostname: z.string().default("portfolio"),
    templateUrl: z.string().optional(),
    bio: z.string(),
    skills: z.record(z.array(z.string())),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    icon: z.string(),
    link: z.string().optional(),
    order: z.number(),
  }),
});

const contacts = defineCollection({
  type: "content",
  schema: z.object({
    heading: z.string(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string(),
      icon: z.string(),
      iconType: z.enum(["material", "svg"]).default("material"),
      svgPath: z.string().optional(),
      svgViewBox: z.string().default("0 0 24 24"),
    })),
  }),
});

const terminal = defineCollection({
  type: "content",
  schema: z.object({
    commands: z.record(z.string()),
    sudoArt: z.string(),
    neofetchInfo: z.record(z.string()).optional(),
  }),
});

const stitch = defineCollection({
  type: "content",
  schema: z.object({
    reviews: z.record(z.string()),
  }),
});

export const collections = { experience, hero, projects, contacts, terminal, stitch };
