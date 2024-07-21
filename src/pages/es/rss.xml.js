import rss from "@astrojs/rss";
import { SITE } from "@consts";
import { Locale } from "@lib/i18n";
import { getLocalizedPosts, sortByDate } from "@lib/posts";

export async function GET(context) {
  const blog = await getLocalizedPosts(Locale.es);

  const items = [...blog].sort(sortByDate);

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.slug}/`,
    })),
  });
}
