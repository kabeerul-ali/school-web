
import { schools } from "../data/data";

export const getSchoolBySlug = (slug) => {
  return schools[slug] || null;
};
