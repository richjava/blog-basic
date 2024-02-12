import Link from "next/link";
import Image from "next/image";
import { urlForImage, collectionSlug, entrySlug } from "@/lib/utils";
import { format } from "date-fns";

export default function List3({ content, router }: any) {
  if (!content) return <></>;
  const { collections } = content;
  if (!collections) {
    return <></>;
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];

  return (
    <section id="list3" className="template">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-3">
          {collection &&
            collection.map((entry: any) => {
              return (
                <div key={entrySlug(entry)}>
                  <div>
                    <Link
                      className="w-24"
                      href={`/${collectionSlug(entry)}/${entrySlug(entry)}`}
                    >
                      <div className="relative mb-6 transition-opacity h-96 lg:h-56 hover:opacity-80">
                        <Image 
                          className="bg-gray-100 rounded-lg"
                          src={urlForImage(entry?.image)}
                          fill
                          style={{ objectFit: "cover" }}
                          alt={entry.title}
                        />
                      </div>
                    </Link>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <p className="mb-0 text-sm capitalize preheading">
                        {format(new Date(entry.date), "dd LLLL yyyy")}
                      </p>
                      <span className="mx-3 text-gray-400">|</span>
                      {entry.category && (
                        <Link
                          className="no-underline hover:underline"
                          href={`/`}
                        >
                          <p className="mb-0 text-sm capitalize">
                            {entry.category}
                          </p>
                        </Link>
                      )}
                    </div>
                    <Link
                      className="no-underline"
                      href={`/${collectionSlug(entry)}/${entrySlug(entry)}`}
                    >
                      <h3 className="mb-2 hover:text-gray-700 dark:hover:text-gray-200">
                        {entry.title}
                      </h3>
                    </Link>
                    <p>{entry.blurb}</p>
                    <Link href={`/${collectionSlug(entry)}/${entrySlug(entry)}`}>
                      Read Article
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
        {!collection.length && (
          <div>
            <p>No posts</p>
          </div>
        )}
      </div>
    </section>
  );
}
