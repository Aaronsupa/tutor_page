import { Heading, HStack, VStack, Stack, Divider, Box, Text, extendTheme } from "@chakra-ui/react";

const breakpoints = {
    base: '0px',
    sm: '400px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }

const theme = extendTheme({ breakpoints })

function Information() {
    return (
        <>
        <Box w={{base: '95%', sm: '90%', md:'55%' }} h = {{base: '30%', sm: '25%', md:'22%' }}>
        <Heading as='h2' size='xl' color='#1F4172' display='flex' marginLeft='5%'>
          Information
        </Heading>
          <Box bg='#D9D9D9' w='100%' h = '100%' color='black' borderWidth='2px' borderRadius='lg' borderColor='#D9D9D9' boxShadow='6px 6px #D9D9D9;' shadow='xl' display="flex" alignItems="center">
            <HStack spacing='10px' h = "90%" w = "100%">
              <VStack spacing='24px' h = "100%" w = "40%">
                <Box w='60%' h='100%' display="flex" justifyContent="left" alignItems='center' >
                  <Stack p={4}>
                    <Text fontSize={{base: 'sm', sm: 'xl', md:'2xl'}} alignItems="center" display="flex" as="b">🧮 Math</Text>
                    <Text fontSize={{base: 'sm', sm: 'l', md:'xl'}} alignItems="left" display="flex">- Algebra</Text>
                    <Text fontSize={{base: 'sm', sm: 'l', md:'xl'}} alignItems="left" display="flex">- Pre Calculus</Text>
                    <Text fontSize={{base: 'sm', sm: 'xl', md:'2xl'}} alignItems="left" display="flex" as="b">🧪 Science</Text>
                    <Text fontSize={{base: 'sm', sm: 'l', md:'xl'}} alignItems="left" display="flex">- Chemistry</Text>
                    <Text fontSize={{base: 'sm', sm: 'xl', md:'2xl'}} alignItems="left" display="flex" as="b">📝 English</Text>
                    <Text fontSize={{base: 'sm', sm: 'l', md:'xl'}} alignItems="left" display="flex">- Essay Review</Text>
                    <Text fontSize={{base: 'sm', sm: 'xl', md:'2xl'}} alignItems="left" display="flex" as="b">Spanish</Text>
                    <Text fontSize={{base: 'sm', sm: 'l', md:'xl'}} alignItems="left" display="flex">- Honors III</Text>
                  </Stack>
                </Box>
              </VStack>
              <Divider orientation='vertical' borderColor="#1F4172" borderWidth='2px' h='100%'></Divider>
              <VStack spacing='24px' h = "100%" w = "60%">
                <Box w='80%' h='55%' bg='#D9D9D9'>
                  <Text  fontSize={{base: 'sm', sm: 'xl', md:'2xl'}} alignItems="center" display="flex" as="b">Meetings</Text>
                </Box>
                <Box w='80%' h='45%' bg='#D9D9D9'>
                  <Text  fontSize={{base: 'sm', sm: 'xl', md:'2xl'}} alignItems="center" display="flex" as="b">Tutoring Levels</Text>
                </Box>
              </VStack>
            </HStack>
          </Box>
        </Box>
        </>
    )
}

export default Information;