import { Heading, HStack, Box, Image } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import pic from "../assets/aboutmePic.jpeg"

const breakpoints = {
    base: '0px',
    sm: '400px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    '2xl': '1536px',
  }

const theme = extendTheme({ breakpoints })

function AboutMe() {
    return (
        <>
        <Box w={{ base: "70%", sm: "70%", md: "45%"}} h = {{ base: "25%", sm: "22%", md: "25%"}} display="flex" flexDirection='column' marginTop="2%">
            <Box bg='#FEFBF6' w='100%' h = '100%' p={3} color='black' borderWidth='2px' borderRadius='lg' borderColor='#D9D9D9' boxShadow='6px 6px #D9D9D9;' shadow='lg' display="flex" alignItems="center" flexDirection="column">
                <Heading color="#2C4E80">About Me</Heading>
                <HStack spacing='24px' h = "80%" w = "100%">
                <Box w='30%' h='90%'>
                    <Image src={pic} alt='Kendall Johnson' boxSize='100%' objectFit="cover" borderRadius='0.9'/>
                </Box>
                <Box w='70%' h='90%' display= 'flex' overflowY="scroll">
                Hello! My name is Kendall Johnson, and I am a currently a Junior at Greenhill School in Addison, Texas. I’m very passionate about sharing my love for and knowledge of different subjects such as math, science, and Spanish. Committed to helping others excel in these areas, I have created a tutoring business crafted to fit various learning styles and individual needs. Whether it is helping with homework, preparing for a test, or generally improve your understanding of a certain concept, I would love to work together to achieve your goals.
                I Look forward to learning with you!
                </Box>
                </HStack>
            </Box>
        </Box>
        </>
    )
}

export default AboutMe