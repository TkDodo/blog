import * as React from 'react'
import { Flex, Badge, Link } from '@theme-ui/components'

import Ads from './Ads'
import HighlightBox from './HighlightBox'

type Props = {
  children: ReadonlyArray<{ language: string; url: string }>
}

const Translations = ({ children }: Props) => (
  <Flex
    as="ul"
    sx={{
      alignItems: 'center',
      padding: 0,
      gap: ['1em', '1.125em'],
      flexWrap: 'wrap',
    }}
  >
    {children.length > 0 ? (
      children.map(({ language, url }) => (
        <Badge as="li" key={language} variant="outline">
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ paddingX: '24px', paddingY: '12px' }}
          >
            {language}
          </Link>
        </Badge>
      ))
    ) : (
      <i>No translations available.</i>
    )}
    <Flex as="li">
      <Link
        href="https://github.com/TkDodo/blog/blob/main/CONTRIBUTING.md#translations"
        target="_blank"
        rel="noopener noreferrer"
      >
        Add translation
      </Link>
    </Flex>
  </Flex>
)

const TranslationsWrapper = ({ children }: Props) => {
  return (
    <Flex sx={{ flexDirection: 'column', gap: ['1em', '1.125em'] }}>
      <Ads />
      <HighlightBox>
        <Translations>{children}</Translations>
      </HighlightBox>
    </Flex>
  )
}

export default TranslationsWrapper
