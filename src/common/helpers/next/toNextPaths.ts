import { Path } from "@api/contentful/contentfulApi";

const getUrlAsSlugs = (url: string) => url.split("/").filter((x) => x);

export interface NextPath {
  params: {
    page: string | string[];
    locale: string;
  };
}

export const toNextPaths = (paths: Path[], ignoreList: string[] = []) => {
  const nextPaths: NextPath[] = [];

  paths.forEach((path) => {
    const isInIgnoreList = ignoreList.some((ignore) =>
      Object.values(path.urls).forEach((urls) => urls.includes(ignore))
    );

    if (isInIgnoreList) {
      return;
    }
    Object.entries(path.urls).forEach(([locale, urls]) => {
      urls.forEach((url) => {
        nextPaths.push({
          params: {
            page: getUrlAsSlugs(url),
            locale,
          },
        });
      });
    });
  });

  return nextPaths;
};
