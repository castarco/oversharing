import type { Root } from 'mdast'

import getReadingTime from 'reading-time'
import { toString as mdastToString } from 'mdast-util-to-string'

type PageData = {
	astro: {
		frontmatter: {
			minutesRead: string
		}
	}
}

export function remarkReadingTime() {
	return (tree: Root, { data }: { data: PageData }) => {
		const readingTime = getReadingTime(mdastToString(tree))
		data.astro.frontmatter.minutesRead = readingTime.text
	}
}
