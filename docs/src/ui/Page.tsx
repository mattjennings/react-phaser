/** @jsx jsx */
import { Box, useTheme, useColorMode } from '@chakra-ui/core'
import { jsx } from 'theme-ui'
import Sidebar from './Sidebar'
import Header from './Header'
import { useMenus } from 'docz'
import { useLayoutEffect } from 'react'

export default function Page({ children, doc }: any) {
  const { colorMode } = useColorMode()

  // scroll to anchor hash
  useLayoutEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const el = document.querySelector(window.location.hash)

      if (el) {
        el.scrollIntoView()
      }
    }
  }, [])

  const maxWidth = [null, null, null, 800]
  const margin = [0, 0, 0, 'auto']

  return (
    <Box display="flex">
      <Sidebar />
      <Box
        as="main"
        height="100vh"
        flexGrow={1}
        overflow="scroll"
        paddingX={[2, 4]}
        paddingBottom={4}
        bg={colorMode === 'dark' ? 'gray.900' : 'white'}
      >
        <Header maxWidth={maxWidth} margin={margin} doc={doc} />
        <Box maxWidth={maxWidth} margin={margin}>
          {children}
        </Box>
      </Box>
    </Box>
  )
}
