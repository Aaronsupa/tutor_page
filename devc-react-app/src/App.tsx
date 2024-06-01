import { useState } from 'react'
import { Box, Card, Center, Container, Divider, Flex, FormControl, FormHelperText, FormLabel, HStack, Input, Spacer, Stack, VStack, Text, Button, Link} from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import './App.css'
import AboutMe from './components/AboutMe'
import Information from './components/Information'
import ContactMe from './components/ContactMe'
import pic from "../assets/test-bkg.jpg"
import Testimonials from './components/Testimonials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AboutMe></AboutMe>
      <Information></Information>
      <Testimonials></Testimonials>
      <ContactMe></ContactMe>
    </>
  )
}

export default App
