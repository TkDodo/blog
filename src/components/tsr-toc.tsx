import * as React from 'react'

import { Toc } from './toc'

type Props = {
  id: string
}

const mapping = [
  {
    id: 'the-beauty-of-tan-stack-router',
    title: '#1: The Beauty of TanStack Router',
  },
  {
    id: 'tan-stack-router-and-query',
    title: '#2: TanStack Router and Query',
  },
]

export const TsrToc = ({ id }: Props) => {
  return <Toc id={id} mapping={mapping} />
}
