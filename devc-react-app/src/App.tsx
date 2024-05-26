import { useState } from 'react'
import { Box, Card, Center, Container, Divider, Flex, FormControl, FormHelperText, FormLabel, HStack, Input, Spacer, Stack, VStack, Text, Button, Link} from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import './App.css'
import AboutMe from './components/AboutMe'
import Information from './components/Information'
import ContactMe from './components/ContactMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AboutMe></AboutMe>
    <Information></Information>
      <Box bg="#1F4172" w='100%' h = '15%' p={4} color='black' marginTop='5vh'>
        <Heading as='h2' size='xl' color='white' display='flex' justifyContent='center'>
          Testimonials
        </Heading>
      </Box>
      <ContactMe></ContactMe>
      <Box bg="#1F4172" w='100%' h = '5%' p={4} color='black'>
        Footer
      </Box>
    </>
  )
}

export default App
