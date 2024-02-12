import { withRouter } from "next/router";
import { getConfig } from "@builtjs/theme";
import Page from "@/lib/page";
import { pages } from "@/lib/constants";

export default withRouter(Page);

export async function getStaticProps() {
  const config = await getConfig(pages.HOME);
  return {
    props: { config }
  };
}