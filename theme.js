import { future } from 'mdx-deck/themes'
import style from 'react-syntax-highlighter/styles/prism/darcula'
import rust from 'react-syntax-highlighter/languages/prism/rust'
import bash from 'react-syntax-highlighter/languages/prism/bash'

export default {
    ...future,
    prism: {
        style: style,
        languages: {
            rust: rust,
            bash: bash
        }
    },
}
