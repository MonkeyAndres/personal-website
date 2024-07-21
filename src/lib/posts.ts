import { getCollection, type CollectionEntry } from "astro:content";

export function cleanSlugDate(slug: string) {
  return slug.slice(11);
}

export const getLocalizedPosts = async (
  langFilter?: string,
  skipDrafts = true,
): Promise<CollectionEntry<"posts">[]> => {
  const localizedPosts = await getCollection("posts", (entry) => {
    const matchesLocale = langFilter
      ? entry.slug.startsWith(`${langFilter}/`)
      : true;

    if (skipDrafts) {
      return !entry.data.draft && matchesLocale;
    }

    return matchesLocale;
  });

  // @ts-ignore
  return localizedPosts.map((post) => {
    const [_lang, slug] = post.slug.split("/");
    const cleanedSlug = cleanSlugDate(slug);

    return {
      ...post,
      slug: cleanedSlug,
    };
  });
};

export const sortByDate = (
  a: CollectionEntry<"posts">,
  b: CollectionEntry<"posts">,
) => {
  return b.data.date.valueOf() - a.data.date.valueOf();
};

export const filterPinnedPosts = (post: CollectionEntry<"posts">) => {
  return post.data.pin;
};

export const getTangentPosts = (
  posts: CollectionEntry<"posts">[],
  currentSlug: string,
) => {
  const sortedPosts = posts.sort(sortByDate);
  const postIndex = sortedPosts.findIndex((p) =>
    new RegExp(currentSlug, "ig").test(p.slug),
  );

  const nextPost = sortedPosts[postIndex + 1] || undefined;
  const prevPost = sortedPosts[postIndex - 1] || undefined;

  return {
    nextPost,
    prevPost,
  };
};
