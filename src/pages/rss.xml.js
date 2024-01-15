import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET({ site }) {
	const posts = await getCollection('post')
	return rss({
		title: 'The Oversharing Geek',
		description: "A weekly newsletter where I'll tell you about my journey from working as a Senior Software Engineer towards bootstrapping my own business... if I don't fail first.",
		// Pull in your project "site" from the endpoint context
		// https://docs.astro.build/en/reference/api-reference/#contextsite
		site,
		items: posts.map(post => ({
			// Assumes all RSS feed item properties are in post frontmatter
			...post.data,
			// Generate a `url` from each post `slug`
			// This assumes all blog posts are rendered as `/blog/[slug]` routes
			// https://docs.astro.build/en/guides/content-collections/#generating-pages-from-content-collections
			link: `/posts/${post.slug}/`,
		})),
	})
}
