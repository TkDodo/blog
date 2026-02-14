import { mkdir, writeFile } from 'node:fs/promises'
import * as p from '@clack/prompts'
import isValidFilename from 'valid-filename'
import { FRONTMATTER_TAGS } from '../src/constants'

const TAGS_NAMES = Array.from(FRONTMATTER_TAGS.keys())

async function main() {
	p.intro('Assistant')

	const action = await p.select({
		message: 'What do you want to do?',
		options: [
			{
				value: 'blog',
				label: 'Write a blog post',
			},
		],
	})

	if (p.isCancel(action)) {
		p.cancel('See you later!')
		process.exit(0)
	}

	if (action === 'blog') {
		const title = await p.text({
			message: 'Title',
			validate: (value) => {
				if (value.length === 0) {
					return 'title is required'
				}
			},
		})

		if (p.isCancel(title)) {
			p.cancel('See you later!')
			process.exit(0)
		}

		const blog = await p.group({
			slug: () => p.text({
				message: 'Slug',
				placeholder: 'Use a SEO-friendly kebab-case slug',
				validate: (value) => {
					if (value.length === 0) {
						return 'slug is required'
					}
					if (value.startsWith('/')) {
						return 'slug must not start with a slash'
					}
					if (value.endsWith('/')) {
						return 'slug must not end with a slash'
					}
					if (value.includes(' ')) {
						return 'slug must not contain spaces'
					}
					if (value.includes('.')) {
						return 'slug must not contain dots'
					}
					if (!isValidFilename(value)) {
						return 'slug must be a valid filename'
					}
				},
			}),
			description: () => p.text({
				message: 'Description',
				validate: (value) => {
					if (value.length === 0) {
						return 'description is required'
					}
				},
			}),
			date: () => p.text({
				message: 'Date',
				// Format: YYYY-MM-DD
				initialValue: new Date().toISOString().split('T')[0],
				validate: (value) => {
					if (value.length === 0) {
						return 'date is required'
					}
					if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
						return 'date must be in YYYY-MM-DD format'
					}
				},
			}),
			tags: () => p.multiselect({
				message: 'Tags',
				options: TAGS_NAMES.map(tag => ({
					value: tag,
					label: tag,
				})),
				required: true,
			}),
		}, {
			onCancel: () => {
				p.cancel('See you later!')
				process.exit(0)
			},
		})

		const relativeFilePath = `content/blog/${blog.date}--${blog.slug}`
		const absoluteFilePath = `${process.cwd()}/${relativeFilePath}`
		const finalPath = `${absoluteFilePath}/index.mdx`
		const fileContent = `---
title: ${title}
slug: ${blog.slug}
description: ${blog.description}
date: ${blog.date}
lastUpdated: ${blog.date}
tags:
${blog.tags.map(tag => `  - ${tag}`).join('\n')}
---`

		p.log.info(`A file will be created at ${relativeFilePath} with:

${fileContent}`)

		const shouldWriteFile = await p.confirm({
			message: 'Do you want to create the file?',
		})

		if (p.isCancel(shouldWriteFile)) {
			p.cancel('See you later!')
			process.exit(0)
		}

		if (shouldWriteFile) {
			await mkdir(absoluteFilePath, { recursive: true })
			await writeFile(finalPath, fileContent)

			p.log.success(`File created at ${finalPath}`)
		}
	}

	p.outro('You\'re all set!')
}

main().catch(console.error)
