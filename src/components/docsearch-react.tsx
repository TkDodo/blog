import { DocSearch } from '@docsearch/react'
import '@docsearch/css'

export default function DocSearchReact() {
	return (
		<DocSearch
			appId="RZU5DA6ADF"
      indices={['tkdodo']}
			apiKey="591cc4615be3e8ed13feb3abe602516d"
		/>
	)
}
