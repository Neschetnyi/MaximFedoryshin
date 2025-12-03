export type publicationType = {
  id: number;
  title: string;
  content: string;
  imgSrc: { preview: string; mobile: string; desktop: string };
};

export type publicationsType = publicationType[];
