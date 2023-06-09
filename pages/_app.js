import '../styles/globals.css'
import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
  }
`

function MyApp({ Component, pageProps }) {
  return (
      <>
        <BaseStyles />
        <CustomStyles />
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
