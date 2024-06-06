import { Heading, HStack, VStack, Stack, Divider, Box, Text, extendTheme, Link, Button, ListItem, UnorderedList } from "@chakra-ui/react";

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
        <Box w={{base: '95%', sm: '90%', md:'55%' }} h = {{base: '30%', sm: '25%', md:'25%' }}>
          <Box bg='#FEFBF6' w='100%' h = '100%' color='black' borderWidth='2px' borderRadius='lg' borderColor='#2C4E8070' boxShadow='6px 6px #2C4E8070;' shadow='xl' display="flex" alignItems="center" overflowY="auto" flexDirection="column">
            <Heading color="#2C4E80" marginBottom="2%" marginTop="2%"> Information & Scheduling</Heading>
            <Divider orientation='horizontal' borderColor="#1F417280" borderWidth='2px' w='90%' borderRadius="10%"></Divider>
            <HStack spacing='10px' h = "90%" w = "100%">
              <VStack spacing='24px' h = "100%" w = "40%">
                <Box w='60%' h='100%' display="flex" justifyContent="left" alignItems='center' >
                  <Stack>
                    <Text fontSize={{base: 'sm', sm: 'xl', md:'xl'}} alignItems="center" display="flex" as="b">🧮 Math</Text>
                    <UnorderedList>
                      <ListItem>Pre-Calculus</ListItem>
                      <ListItem>Algebra</ListItem>
                    </UnorderedList>
                    <Text fontSize={{base: 'sm', sm: 'xl', md:'xl'}} alignItems="left" display="flex" as="b">🧪 Science</Text>
                    <UnorderedList>
                      <ListItem>Chemistry</ListItem>
                    </UnorderedList>
                    <Text fontSize={{base: 'sm', sm: 'xl', md:'xl'}} alignItems="left" display="flex" as="b">📝 English</Text>
                    <UnorderedList>
                      <ListItem>Essay Review</ListItem>
                    </UnorderedList>
                    <Text fontSize={{base: 'sm', sm: 'xl', md:'xl'}} alignItems="left" display="flex" as="b">Spanish</Text>
                  </Stack>
                </Box>
              </VStack>
              <Divider orientation='vertical' borderColor="#F0F0F0" borderWidth='2px' h='99%'></Divider>
              <VStack spacing='24px' h = {{base: '100%', sm: '100%', md:'85%'}} w = "60%" display="flex" justifyContent="space-between">
                <Box w='80%' h={{base: '80%', sm: '80%', md:'50%'}} bg='#FEFAF6' display="flex" flexDirection="column" justifyContent="space-between">
                  <Text  fontSize={{base: 'sm', sm: 'xl', md:'xl'}} alignItems="center" display="flex" as="b">Meetings</Text>
                  <UnorderedList>
                    <ListItem>For summer times, use the following Calendy link to book me! I am normally free Monday-Friday, 9-5</ListItem>
                  </UnorderedList>
                  <Link href="calendly.com/" isExternal marginTop="3%">
                    <Button colorScheme="blue" variant="outline">
                      Schedule with me!
                    </Button>
                  </Link>
                </Box>
                <Box w={{base: '60%', sm: '60%', md:'30%'}}  h='40%' bg='#FEFAF6'>
                  <Text  fontSize={{base: 'sm', sm: 'xl', md:'xl'}}  as="b">Tutoring Levels</Text>
                    <UnorderedList>
                      <ListItem>Upper School</ListItem>
                      <ListItem>Middle School</ListItem>
                    </UnorderedList>
                </Box>
              </VStack>
            </HStack>
          </Box>
        </Box>
        </>
    )
}

export default Information;