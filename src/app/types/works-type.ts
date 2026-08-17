type Imgs = {
  previewId: string;
  src: string;
};

type Tasks = {
  title?: string;
  epxlain: string[];
};

export type caseStudies = {
  title: string;
  description?: string | null;
  problem: string[];
  approach?: string[] | null;
  implementation: string[] | Tasks[];
  result?: string[] | null;
};

export type TWorks = {
  id: string;
  title: string;
  explain?: string | null;
  responsive?: string | null;
  members?: string | null;
  startDate: string;
  endDate: string;
  imgs: Imgs[];
  skills?: string | null;
  tasks: Tasks[];
  caseStudy?: caseStudies[] | null;
};
