import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: 'Andres Correa Casablanca',
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: 'The Oversharing Geek',
	// Meta property used as the default description meta property
	description:
		"A weekly newsletter where I'll tell you about my journey from working as a Senior Software Engineer towards bootstrapping my own business... if I don't fail first.",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: 'en-GB',
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: 'en_GB',
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: 'en-GB',
		options: {
			day: 'numeric',
			month: 'short',
			year: 'numeric',
		},
	},
	// webmentions: {
	// 	link: 'https://webmention.io/oversharing.coderspirit.xyz/webmention',
	// },
}

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string; rel?: string }> = [
	{
		title: 'Home',
		path: '/',
	},
	{
		title: 'Blog',
		path: '/posts/',
	},
	{
		title: 'About',
		path: 'https://blog.coderspirit.xyz/about/',
		rel: 'me',
	},
]
