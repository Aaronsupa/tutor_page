import { useState } from 'react'
import { Box, Card, Center, Container, Divider, Flex, FormControl, FormHelperText, FormLabel, HStack, Input, Spacer, VStack } from '@chakra-ui/react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box bg='FFFFF' w='45%' h = '20%' p={3} color='black' borderWidth='2px' borderRadius='lg' borderColor='#D9D9D9' boxShadow='6px 6px #D9D9D9;' display="flex" alignItems="center">
          <HStack spacing='24px' h = "80%" w = "100%">
            <Box w='30%' h='90%' bg='#D9D9D9'>
              1
            </Box>
            <Box w='70%' h='90%' bg='#D9D9D9'>
              2
            </Box>
          </HStack>
      </Box>
      <Box bg='FFFFF' w='60%' h = '25%' p={2} color='black' borderWidth='2px' borderRadius='lg' borderColor='#D9D9D9' boxShadow='6px 6px #D9D9D9;'  display="flex" alignItems="center">
        <HStack spacing='10px' h = "90%" w = "100%">
          <VStack spacing='24px' h = "100%" w = "50%" p={0}>
            <Box w='100%' h='100%' bg='#D9D9D9'>
              1
            </Box>
          </VStack>
          <VStack spacing='24px' h = "100%" w = "50%">
            <Box w='100%' h='55%' bg='#D9D9D9'>
              1
            </Box>
            <Box w='100%' h='45%' bg='#D9D9D9'>
              2
            </Box>
          </VStack>
        </HStack>
      </Box>
      <Box bg="#1F4172" w='100%' h = '15%' p={4} color='black'>
        Testimonials
      </Box>
      <Box bg='FFFFF' w='60%' h = '20%' p={4} color='black' borderWidth='2px' borderRadius='lg' borderColor='#D9D9D9' boxShadow='6px 6px #D9D9D9;'>
        <Flex>
            <Container>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type='email' />
                <FormHelperText>We'll never share your email.</FormHelperText>
                <FormLabel>Email address</FormLabel>
                <Input type='email' />
                <FormHelperText>We'll never share your email.</FormHelperText>
                <FormLabel>Email address</FormLabel>
                <Input type='email' />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>
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
