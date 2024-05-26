import { Heading, Flex, Container, FormControl, FormLabel, Input, FormHelperText, Button, Link, Box, extendTheme } from "@chakra-ui/react";

const breakpoints = {
    base: '0px',
    sm: '400px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }

const theme = extendTheme({ breakpoints })

/*
                <Container p={4} display="flex" justifyContent="center" alignItems="center"> 
                <Link href='' isExternal>
                    <Button colorScheme='blue' size={{base: 'sm', sm: 'sm', md:'md'}}>
                        Schedule with Me!
                    </Button>
                </Link> 

*/
function ContactMe() {
    return(
        <>
        <Box w={{ base: "90%", sm: "90%", md: "40%"}}  h = {{ base: "25%", sm: "25%", md: "25%"}}>
            <Heading as='h2' size='xl' color='#1F4172' display='flex' marginLeft='5%'>
            Contact Me
            </Heading>
            <Box bg='FFFFF' w='100%' h = '100%' p={4} color='black' borderWidth='2px' borderRadius='lg' borderColor='#D9D9D9' boxShadow='6px 6px #D9D9D9;' shadow='lg'>
            <Flex>
                <Container w = '70%'>
                    <FormControl isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type='text' placeholder='First Name' focusBorderColor='teal' />
                    <FormLabel>Last Name</FormLabel>
                    <Input type='text' placeholder='Last Name' focusBorderColor='teal' />
                    <FormLabel>Current Grade Level</FormLabel>
                    <Input type='number' placeholder='Current Grade Level' focusBorderColor='teal'/>
                    <FormLabel>Email Address</FormLabel>
                    <Input type='email' placeholder='Email Address' focusBorderColor='teal' border="1px solid #ccc" border-radius= "5px"/>
                    <FormHelperText>We'll never share your email.</FormHelperText>
                    <Button
                        mt={2}
                        colorScheme='teal'
                        type='submit'
                    >
                        Submit
                    </Button>
                    </FormControl>
                </Container>
                </Flex>
            </Box>
        </Box>
        </>
    )
}

export default ContactMe;