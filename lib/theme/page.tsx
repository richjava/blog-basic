/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import { useParams } from 'next/navigation'
import Layout from '@/components/plugins/richjava_blog-basic/layout';
import {getComponents} from '@/lib/builtjs-utils';
import { setupCrumbs } from ".";
import {transformPage, fetchEntry, fetchEntries} from '@builtjs/theme';

const Page = ({config}: any) => {

  const router = useRouter();
  const params = useParams();
  const {slug} = router.query;
  const [page, setPage] = useState<any>(null);
  const [sectionComps, setSectionComps] = useState<React.ComponentType[]>([]);
  const [layoutComps, setLayoutComps] = useState<React.ComponentType[]>([]);
  const [isSetUpCrumbs, setIsSetupCrumbs] = useState(false);

  useEffect(() => {
    if (!isSetUpCrumbs) {
      setupCrumbs();
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
    const page: any = await transformPage(config, params);
    if (!page) {
      return;
    }
    const [sectionComponents, layoutComponents] = await Promise.all([
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
                    <Section 
                    key={i} 
                    api={page.sections[i].template.doc.type === 'dynamic' ? {fetchEntry, fetchEntries} : null} 
                    content={page.sections[i].content} />
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
