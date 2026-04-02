export type Plan = {
  id: string;
  date: string;
  location: string;
  url: string;
  source: string;
  author: string;
  upvotes: number;
  title: {
    ca: string;
    es: string;
    en: string;
  };
  description: {
    ca: string;
    es: string;
    en: string;
  };
};
