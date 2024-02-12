import { withRouter } from "next/router";
import { getConfig, getData } from "@builtjs/theme";
import Page from "@/lib/page";
import { pageTypes } from "@/lib/constants";

export default withRouter(Page);

export async function getStaticPaths() {
  let pageData = await getData("/data/pages.json");
  const type = 'template';
  let pages = pageData.pages.reduce(
    (acc: any, page: any) =>
      page.type === type ? [...acc, `/${type}/${page.slug}`] : acc,
    []
  );
  return {
    paths: pages,
    fallback: true,
  };
}

export async function getStaticProps(context:any) {
  const { slug } = context.params;
  const config = await getConfig(slug, pageTypes.TEMPLATES);
  return {
    props: { config },
  };
}
