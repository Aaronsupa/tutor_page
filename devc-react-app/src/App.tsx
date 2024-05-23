import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Box, Card, Container, Divider, Flex } from '@chakra-ui/react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box bg='FFFFF' w='45%' h = '20%' p={4} color='black' borderWidth='2px' borderRadius='lg' borderColor='#D9D9D9' boxShadow='6px 6px #D9D9D9;'>
        <Flex>
          <Container>
            <p>Hello World</p>
          </Container>
          <Container p={4}>
            <p>afwafad adwa dwa
            wad wadadw adwa
            dwa dwadwadwadwada
            dwadwa afwafad adwa dwa
            wad wadadw adwa
            dwa dwadwadwadwada
            dwadwa</p>
          </Container>
        </Flex>
      </Box>
      <Box bg='FFFFF' w='60%' h = '30%' p={4} color='black' borderWidth='2px' borderRadius='lg' borderColor='#D9D9D9' boxShadow='6px 6px #D9D9D9;'>
        <Flex>
            <Container>
              <p>Hello World</p>
            </Container>
            <Container p={4}>
              <p>afwafad adwa dwa
              wad wadadw adwa
              dwa dwadwadwadwada
              dwadwa afwafad adwa dwa
              wad wadadw adwa
              dwa dwadwadwadwada
              dwadwa</p>
            </Container>
          </Flex>
      </Box>
      <Box bg="#1F4172" w='100%' h = '15%' p={4} color='black'>
        Testimonials
      </Box>
      <Box bg='FFFFF' w='60%' h = '20%' p={4} color='black' borderWidth='2px' borderRadius='lg' borderColor='#D9D9D9' boxShadow='6px 6px #D9D9D9;'>
        <Flex>
            <Container>
              <p>Hello World</p>
            </Container>
            <Container p={4}>
              <p>afwafad adwa dwa
              wad wadadw adwa
              dwa dwadwadwadwada
              dwadwa afwafad adwa dwa
              wad wadadw adwa
              dwa dwadwadwadwada
              dwadwa</p>
            </Container>
          </Flex>
      </Box>
      <Box bg="#1F4172" w='100%' h = '5%' p={4} color='black'>
        Footer
      </Box>
    </>
  )
}

export default App
