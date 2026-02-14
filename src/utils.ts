import type { AstroIntegration } from 'astro'
import type { CollectionEntry } from 'astro:content'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sirv from 'sirv'

/**
 * Returns a date in the format "MMM DD, YYYY"
 */
export function defaultDateFormat(date: Date): string {
	return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

/**
 * Returns a date in ISO format
 */
export function isoDateFormat(date: Date): string {
	return date.toISOString()
}

/**
 * Sort the 'blog' collection by date DESC
 */
export function sortAsc(data: Array<CollectionEntry<'blog'>>) {
	return data.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
}

/**
 * Capitalize the first letter of a string.
 */
export function capitalize<T extends string>(str: T): Capitalize<T> {
	return (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<T>
}

/**
 * Derive a post slug from explicit frontmatter or folder name.
 */
export function getPostSlug(entry: CollectionEntry<'blog'>): string {
	if (entry.data.slug) {
		return entry.data.slug.replace(/^\//, '').replace(/\/$/, '')
	}

	const parts = entry.id.split('/')
	const parentFolder = parts.at(-2)
	return parentFolder ?? parts[0]
}

/**
 * Create a URL-safe slug for tags.
 */
export function slugifyTag(tag: string): string {
	return tag
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-')
}

/**
 * Get all posts tagged with the given tag.
 */
export function getPostsByTag(data: Array<CollectionEntry<'blog'>>, tag: string) {
	return data.filter(post => post.data.tags?.includes(tag))
}

/**
 * Get all tags and their counts.
 */
export function getTags(data: Array<CollectionEntry<'blog'>>) {
	const counts = new Map<string, number>()

	for (const post of data) {
		for (const tag of post.data.tags ?? []) {
			counts.set(tag, (counts.get(tag) ?? 0) + 1)
		}
	}

	return Array.from(counts.entries())
		.map(([tag, count]) => ({ tag, slug: slugifyTag(tag), count }))
		.sort((a, b) => a.tag.localeCompare(b.tag))
}

/**
 * Modified from astro-pagefind
 * Source: https://github.com/shishkin/astro-pagefind/blob/03a7c04e0c89d2445165212f76181c709b5ed1a9/packages/astro-pagefind/src/pagefind.ts
 *
 * MIT License
 * Copyright 2022 Sergey Shishkin
 */
export function pagefindIntegration(): AstroIntegration {
	let clientDir: string | undefined

	return {
		name: 'pagefind',
		hooks: {
			'astro:config:setup': ({ config }) => {
				if (config.adapter) {
					clientDir = fileURLToPath(config.build.client)
				}
			},
			'astro:server:setup': ({ server, logger }) => {
				const outDir = clientDir ?? path.join(server.config.root, server.config.build.outDir)
				logger.debug(`Serving pagefind from ${outDir}`)
				const serve = sirv(outDir, {
					dev: true,
					etag: true,
				})
				server.middlewares.use((req, res, next) => {
					if (req.url?.startsWith('/pagefind/')) {
						serve(req, res, next)
					}
					else {
						next()
					}
				})
			},
		},
	}
}
