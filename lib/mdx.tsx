import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode, { type Options as PrettyCodeOptions } from "rehype-pretty-code";
import { mdxComponents } from "@/components/reading/mdx-components";

const prettyCodeOptions: PrettyCodeOptions = {
  // Dual theme; span colors are switched via [data-theme] in globals.css.
  theme: { light: "github-light", dark: "github-dark" },
  keepBackground: false,
};

/** Compile an MDX lesson body to React with our components + plugins. */
export async function renderMdx(source: string) {
  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      // Lessons are first-party. v6 blocks `{...}` JS by default; Compare
      // tables and similar components pass arrays as JSX expressions.
      blockJS: false,
      blockDangerousJS: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypePrettyCode, prettyCodeOptions]],
      },
    },
  });
  return content;
}
