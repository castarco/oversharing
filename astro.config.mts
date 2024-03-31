import { readFileSync } from 'node:fs'
import { defineConfig } from 'astro/config'

import type { RemarkPlugin } from '@astrojs/markdown-remark'

import icon from 'astro-icon'
import mdx from '@astrojs/mdx'
import remarkUnwrapImages from 'remark-unwrap-images'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { shield } from '@kindspells/astro-shield'

import { remarkReadingTime } from './src/utils/remark-reading-time'
import rehypeExternalLinks from 'rehype-external-links'

// https://astro.build/config
export default defineConfig({
	output:'static',
	site: 'https://oversharing.coderspirit.xyz',
	markdown: {
		remarkPlugins: [
			remarkUnwrapImages,
			remarkReadingTime as unknown as RemarkPlugin,
		],
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{ target: '_blank', rel: ['noopener, noreferrer'] },
			],
		],
		remarkRehype: { footnoteLabelProperties: { className: [''] } },
		shikiConfig: {
			theme: 'dracula',
			wrap: true,
		},
	},
	integrations: [
		icon(),
		mdx(),
		sitemap(),
		tailwind({ applyBaseStyles: false }),
		shield({})
	],
	prefetch: true,
	trailingSlash: 'always',
	vite: {
		plugins: [rawFonts(['.ttf'])],
	},
})

function rawFonts(ext: string[]) {
	return {
		name: 'vite-plugin-raw-fonts',
		transform(_: unknown, id: string) {
			if (ext.some(e => id.endsWith(e))) {
				const buffer = readFileSync(id)
				return {
					code: `export default ${JSON.stringify(buffer)}`,
					map: null,
				}
			}
			return undefined
		},
	}
}
