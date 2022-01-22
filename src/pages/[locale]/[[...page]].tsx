import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { toNextPaths } from "@common/helpers/next/toNextPaths";
import { contentfulApi } from "@api/contentful/contentfulApi";
import { getPageSlugFromSlugsArray } from "@common/helpers/next/getPageSlugFromSlugsArray";
import { AppError, PageError } from "@common/errors/AppError";
import { PageNextPage } from "@api/types/pages/page";

const Page: NextPage<PageNextPage> = ({ page, data, preview, locale }) => {
  const router = useRouter();
  // const { data } = useSWR("/api/posts", fetcher, { initialData: page });
  // const templates = Templates;
  if (router.isFallback) return <div>Loading...</div>;

  // const Template = templates[template];

  if (!Page) return <>No page template/component found</>;

  return <div>{page.title}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const content = await contentfulApi.getPaths();
  const paths = toNextPaths(content.paths);

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<PageNextPage> = async ({
  params,
  preview,
}) => {
  const locale = params?.locale as string;
  const props = {} as PageNextPage;
  const slug = getPageSlugFromSlugsArray(params?.page ?? "/");

  try {
    props.page = await contentfulApi.getPageBySlug({
      url: slug,
      preview,
      locale,
    });
  } catch (e) {
    props.error = e as PageError;
  }

  if (props.error) throw new AppError(props.error);

  return {
    props: {
      ...props,
      fallback: true,
    },
    revalidate: 1,
  };
};

export default Page;
