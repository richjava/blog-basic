import { withRouter } from "next/router";
import { getConfig } from "@builtjs/theme";
import Page from "@/lib/theme/page";
import { pages } from "@/lib/theme/constants";

export default withRouter(Page);

export async function getStaticProps() {
  const config = await getConfig({
    pageName:pages.BLOG
  });
  return {
    props: { config }
  };
}