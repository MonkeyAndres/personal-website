import { GET as rss } from "./rss.xml.js";

export async function GET(context) {
  return rss(context);
}
