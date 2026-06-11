export type Category = "portrait" | "landscape" | "street" | "editorial";

export interface Photo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: Category;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  category: Category;
  date: string;
  photos: Photo[];
}