import * as React from 'react'

const id = 'inject-comments'

const Comments = () => {
    React.useEffect(() => {
        const script = document.createElement('script')
        const parent = document.getElementById(id)

        script.setAttribute('src', 'https://utteranc.es/client.js')
        script.setAttribute('repo', 'TkDodo/blog-comments')
        script.setAttribute('issue-term', 'pathname')
        script.setAttribute('theme', 'photon-dark')
        script.setAttribute('crossorigin', 'anonymous')
        script.setAttribute('async', 'true')
        parent.appendChild(script)
    }, [])

    return <div id={id} />
}

export default Comments
