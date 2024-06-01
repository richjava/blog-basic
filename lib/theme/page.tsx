import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import { useParams } from 'next/navigation'
import Layout from '@/components/plugins/richjava-blog/layout';
import {getComponents} from './utils';
import { setupCrumbs } from ".";
const {transformPage} = require('@builtjs/theme');

const Page = ({config}: any) => {

  const router = useRouter();
  const params = useParams();
  const {slug} = router.query;
  const [page, setPage] = useState<any>(null);
  const [layoutComps, setLayoutComps] = useState([]);
  const [sectionComps, setSectionComps] = useState([]);
  let [isSetUpCrumbs, setIsSetupCrumbs] = useState(false);

  useEffect(() => {
    if (!isSetUpCrumbs) {
      setupCrumbs(router);
      setIsSetupCrumbs(true);
    }
    setPage(null);
    setLayoutComps([]);
    init();
  }, [slug]);

  async function init() {
    if (!config) {
      return;
    }
    let page: any = await transformPage(config, params);
    console.log('page... ',page)
    if (!page) {
      return;
    }
    let [sectionComponents, layoutComponents] = await Promise.all([
      getComponents(page.sections),
      getComponents(page.layout.sections),
    ]);
    setPage(page);
    setSectionComps(sectionComponents);
    setLayoutComps(layoutComponents);
  }

  return (
    <>
      <Layout layoutComps={layoutComps} page={page}>
        {
          <>
            {page &&
              sectionComps.length > 0 &&
              sectionComps.map((Section: any, i: number) => {
                return (
                  page.sections[i] && (
                    <Section key={i} content={page.sections[i].content} />
                  )
                );
              })}
          </>
        }
      </Layout>
    </>
  );
};

export default Page;
