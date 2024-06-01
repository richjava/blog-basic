import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const urlForImage = (source: any) => {
  return `${publicRuntimeConfig.BACKEND_URL || ""}${
    source?.url
  }`
}

export const widthForImage = (source: any) =>
source?.width

export const heightForImage = (source: any) =>
source?.height

export const collectionSlug = (entry: any) =>
entry._type ? entry._type.replace(/[A-Z]/g, (letter:any) => `-${letter.toLowerCase()}`) : '';

export const entrySlug = (entry: any) => entry && entry.slug && entry.slug.current ? entry.slug.current : entry.slug;
