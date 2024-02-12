import { GetStaticPaths, GetStaticProps } from "next";
import { withRouter } from "next/router";
import { getConfig, getEntries } from "@builtjs/theme";
import Page from "@/lib/page";
import { pages } from "@/lib/constants";

export default withRouter(Page);

export const getStaticPaths: GetStaticPaths = async () => {
  const entryData:any = await getEntries('post');
  return {
    paths:
      entryData.entries.map(
        (entry:any) => `/post/${entry.slug}`
      ) ?? [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const config = await getConfig(pages.BLOG_ARTICLE);
  config.params = context.params;
  return {
    props: { config },
  };
};
