import { Heading, HStack, Box } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"

const breakpoints = {
    base: '0px',
    sm: '400px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }

const theme = extendTheme({ breakpoints })

function AboutMe() {
    return (
        <>
        <Box w={{ base: "70%", sm: "70%", md: "40%"}} h = {{ base: "15%", sm: "22%", md: "20%"}} display="flex" flexDirection='column'>
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
        </>
    )
}

export default AboutMe