export const getPageSlugFromSlugsArray = (slugs: string | string[]): string => {
  if (typeof slugs === "string") return `${slugs}`;

  const lastSlug = slugs.pop();

  if (!lastSlug) return "";

  return lastSlug;
};
