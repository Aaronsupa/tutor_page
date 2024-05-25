import { useState } from 'react'
import { Box, Card, Center, Container, Divider, Flex, FormControl, FormHelperText, FormLabel, HStack, Input, Spacer, Stack, VStack, Text, Button, Link} from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box w='40%' h = '20%' display="flex" flexDirection='column'>
        <Heading as='h2' size='xl' color='#1F4172' display='flex' marginLeft='5%'>
          About Me
        </Heading>
        <Box bg='FFFFF' w='100%' h = '100%' p={3} color='black' borderWidth='2px' borderRadius='lg' borderColor='#D9D9D9' boxShadow='6px 6px #D9D9D9;' shadow='lg' display="flex" alignItems="center">
            <HStack spacing='24px' h = "80%" w = "100%">
              <Box w='30%' h='90%' bg='#D9D9D9'>
                1
              </Box>
              <Box w='70%' h='90%' bg='#D9D9D9'>
                2
              </Box>
            </HStack>
        </Box>
      </Box>
      <Box w='55%' h = '20%'>
        <Heading as='h2' size='xl' color='#1F4172' display='flex' marginLeft='5%'>
          Information
        </Heading>
          <Box bg='#D9D9D9' w='100%' h = '100%' color='black' borderWidth='2px' borderRadius='lg' borderColor='#D9D9D9' boxShadow='6px 6px #D9D9D9;' shadow='xl' display="flex" alignItems="center">
            <HStack spacing='10px' h = "90%" w = "100%">
              <VStack spacing='24px' h = "100%" w = "40%">
                <Box w='60%' h='100%' display="flex" justifyContent="left" alignItems='center' >
                  <Stack p={4}>
                    <Text fontSize='2xl' alignItems="center" display="flex" as="b">🧮 Math</Text>
                    <Text fontSize='xl'alignItems="left" display="flex">- Algebra</Text>
                    <Text fontSize='xl'alignItems="left" display="flex">- Pre Calculus</Text>
                    <Text fontSize='2xl'alignItems="left" display="flex" as="b">🧪 Science</Text>
                    <Text fontSize='xl' alignItems="left" display="flex">- Chemistry</Text>
                    <Text fontSize='2xl' alignItems="left" display="flex" as="b">📝 English</Text>
                    <Text fontSize='xl' alignItems="left" display="flex">- Essay Review</Text>
                    <Text fontSize='2xl' alignItems="left" display="flex" as="b">Spanish</Text>
                    <Text fontSize='x1' alignItems="left" display="flex">- Honors III</Text>
                  </Stack>
                </Box>
              </VStack>
              <Divider orientation='vertical' borderColor="#1F4172" borderWidth='2px' h='100%'></Divider>
              <VStack spacing='24px' h = "100%" w = "60%">
                <Box w='80%' h='55%' bg='#D9D9D9'>
                  <Text  fontSize='2xl' alignItems="center" display="flex" as="b">Meetings</Text>
                </Box>
                <Box w='80%' h='45%' bg='#D9D9D9'>
                  <Text  fontSize='2xl' alignItems="center" display="flex" as="b">Tutoring Levels</Text>
                </Box>
              </VStack>
            </HStack>
          </Box>
      </Box>
      <Box bg="#1F4172" w='100%' h = '15%' p={4} color='black' marginTop='5vh'>
        <Heading as='h2' size='xl' color='white' display='flex' justifyContent='center'>
          Testimonials
        </Heading>
      </Box>
      <Box w='55%' h = '20%'>
        <Heading as='h2' size='xl' color='#1F4172' display='flex' marginLeft='5%'>
          Contact Me & Schedule
        </Heading>
        <Box bg='FFFFF' w='100%' h = '100%' p={4} color='black' borderWidth='2px' borderRadius='lg' borderColor='#D9D9D9' boxShadow='6px 6px #D9D9D9;' shadow='lg' >
          <Flex>
              <Container w = '60%'>
                <FormControl isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type='text' placeholder='First Name' focusBorderColor='teal' />
                  <FormLabel>Last Name</FormLabel>
                  <Input type='text' placeholder='Last Name' focusBorderColor='teal' />
                  <FormLabel>Current Grade Level</FormLabel>
                  <Input type='number' placeholder='Current Grade Level' focusBorderColor='teal'/>
                  <FormLabel>Email Address</FormLabel>
                  <Input type='email' placeholder='Email Address' focusBorderColor='teal'/>
                  <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
              </Container>
              <Container p={4} display="flex" justifyContent="center" alignItems="center">
              <Link href='' isExternal>
                <Button colorScheme='blue' size='lg'>
                    Schedule with Me!
                </Button>
              </Link>
              </Container>
            </Flex>
        </Box>
      </Box>
      <Box bg="#1F4172" w='100%' h = '5%' p={4} color='black'>
        Footer
      </Box>
    </>
  )
}

export default App
