export type Info = {
  count: number;
  next: number | null;
  pages: number;
  prev: number | null;
};

export type GqlResponseType<ResultType> = {
  info: Info;
  results: Array<ResultType>;
};