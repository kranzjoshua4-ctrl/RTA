export type Service = { title: string; slug: string; excerpt: string; body?: string; keywords?: string[] };
export type Industry = { title: string; slug: string; description: string; typicalServices?: string[] };
export type Project = { title: string; slug: string; location?: string; period?: string; description: string; services?: string[] };
export type Certificate = { title: string; description: string; validity?: string };
export type Job = { title: string; location: string; type: string; description: string; requirements?: string[]; benefits?: string[]; applyEmail?: string };
