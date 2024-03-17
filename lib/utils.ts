import dynamic from "next/dynamic";
import { language } from "./constants";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export async function getComponentMap(sections: any) {
  return new Promise(async (resolve) => {
    const map: any = {};
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      if (!section.template || !section.template.doc) {
        continue;
      }
      const template = section.template.doc;
      const templateFileName = template.name.replace(/[A-Z]/g, function (match: string) {
        return '-' + match.toLowerCase();
      });
      if (template.isDemo) {
        map["section" + i] = import(
          `./components/templates/${
            template.category
          }/${templateFileName}.${
            language === "typescript" ? "tsx" : "jsx"
          }`
        );
      } else {
        map["section" + i] = import(
          `../components/plugins/${publicRuntimeConfig.NAMESPACE}/templates/${
            template.category
          }/${templateFileName}.${
            language === "typescript" ? "tsx" : "jsx"
          }`
        );
      }
    }
    resolve(map);
  });
}

export function getComponents(sections: any) {
  return new Promise((resolve) => {
    getComponentMap(sections).then((map: any) => {
      let comps = [];
      for (const key of Object.keys(map)) {
        let comp = dynamic(() => map[key], {
          suspense: false,
        });
        comps.push(comp);
      }
      resolve(comps);
    });
  });
}

export const urlForImage = (source:any) => {
  return `${publicRuntimeConfig.BACKEND_URL || ""}${
    source?.url
  }`
}

export const widthForImage = (source: any) =>
source?.width

export const heightForImage = (source: any) =>
source?.height

export const collectionSlug = (entry: any) =>
entry._type ? entry._type.replace(/[A-Z]/g, (letter: string) => `-${letter.toLowerCase()}`) : '';

export const entrySlug = (entry: any) => entry && entry.slug && entry.slug.current ? entry.slug.current : entry.slug;
