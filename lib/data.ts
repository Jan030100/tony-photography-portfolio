import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "urban-silence",
    title: "Urban Silence",
    description:
      "A study of quiet moments in the city — empty streets at dawn, long shadows, still cafés.",
    coverImage: "/images/urban-silence/cover.jpg",
    category: "street",
    date: "2024-03",
    photos: [
      {
        id: "us-01",
        src: "/images/urban-silence/01.jpg",
        alt: "Empty street corner at dawn",
        width: 1200,
        height: 800,
        category: "street",
      },
    ],
  },
  {
    slug: "between-light",
    title: "Between Light",
    description:
      "Portraits taken in the golden hour — soft, directional, intimate.",
    coverImage: "/images/between-light/cover.jpg",
    category: "portrait",
    date: "2024-06",
    photos: [
      {
        id: "bl-01",
        src: "/images/between-light/01.jpg",
        alt: "Portrait in warm afternoon light",
        width: 800,
        height: 1200,
        category: "portrait",
      },
    ],
  },
];

export const getFeaturedProjects = () => projects.slice(0, 2);
export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);