import * as path from 'path'
import OgImage from './src/components/OgImage'
import * as React from 'react'
import { join } from 'path'
import * as fs from 'fs'
const matter = require('gray-matter')
const sharp = require('sharp')
import satori from 'satori'

const getOutputType = (banner: string) => {
  if (banner.endsWith('.png')) {
    return 'png'
  }
  if (banner.endsWith('.jpg') || banner.endsWith('.jpeg')) {
    return 'jpeg'
  }
}

const baseDirectory = join(__dirname, 'content', 'posts')

const files = fs.readdirSync(baseDirectory)

async function run() {
  for (const file of files) {
    const filePath = path.join(baseDirectory, file)
    const isDirectory = fs.statSync(filePath).isDirectory()
    if (isDirectory) {
      await convert(file)
    }
  }
}

async function convert(slug: string) {
  // Read the content of the MDX file
  const mdxContent = fs.readFileSync(
    join(__dirname, 'content', 'posts', slug, 'index.mdx'),
    'utf8'
  )

  // Use gray-matter to parse frontmatter
  const { data } = matter(mdxContent)

  // Print the frontmatter
  console.log('Frontmatter:', data)

  const banner = fs.readFileSync(
    join(__dirname, 'content', 'posts', slug, data.banner)
  )

  const metadata = await sharp(Buffer.from(banner)).metadata()

  const resizeProps =
    metadata.width > metadata.height
      ? {
          width: 700,
        }
      : { height: 500 }

  const resizedBanner = await sharp(banner)
    .resize({
      ...resizeProps,
      withoutEnlargement: true,
    })
    .toBuffer()

  const base64Banner = Buffer.from(resizedBanner).toString('base64')
  const outputType = getOutputType(data.banner)

  // console.log(`data:image/${outputType};base64,${base64Banner}`)

  const resizedMetaData = await sharp(
    Buffer.from(resizedBanner)
  ).metadata()

  const svg = await satori(
    <OgImage
      title={data.title}
      img={{
        src: `data:image/${outputType};base64,${base64Banner}`,
        width: resizedMetaData.width,
        height: resizedMetaData.height,
      }}
    />,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          // Use `fs` (Node.js only) or `fetch` to read the font as Buffer/ArrayBuffer and provide `data` here.
          data: fs.readFileSync(
            join(__dirname, 'static', 'fonts', 'Inter-Regular.woff')
          ),
          weight: 400,
          style: 'normal',
        },
      ],
    }
  )

  const outputPath = join(
    __dirname,
    'static',
    'og-images',
    `${slug}.png`
  )

  // Convert SVG to PNG
  sharp(Buffer.from(svg))
    .png()
    .toFile(outputPath, (err, info) => {
      if (err) {
        console.error(err)
      } else {
        console.log('Image saved successfully:', info)
      }
    })
}

run()
