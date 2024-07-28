import { Box, Heading, Text } from "@chakra-ui/react";
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import { useState } from "react";

function Testimonials() {
    const [testimonials, settestimonials] = useState([
        "Your ability to piece old concepts with new ones along with wanting to attack the most challenging problems presented in class is why you can solve the most difficult test problems. You are extremely intuitive, and if you continue being diligent with your work outside of class next year, I see no reason why you cannot have similar success in AP AB Calculus.",
        "your dedication to refining your language skills is commendable. Your strong grasp of the fundamentals of grammar continues to shine through, providing a solid foundation for your Spanish proficiency.",
        "You have been a silent powerhouse for most of the year but have started to effectively collaborate with your peers, showing rock-solid leadership skills. Your consistent reflections show that you are spending time outside of class reviewing material and working on extra practice",
        "You have worked hard to understand the concepts rather than memorize answers, which has been evident in your assessments",
        "Your willingness to participate and your optimistic demeanor create a conducive learning environment",
        "Kendall, your work ethic and discipline are top-notch and exceptional-- it is truly a pleasure having you as a student in Honors Chemistry this year! I have been impressed by your ability to work independently and during group activities. Your responses to CERs and assessments show that you have a good grasp on the material we cover"
    ])

    const [contr, setcontr] = useState(0);

    const handleClickLeft = () => {
        if(contr <= 0){
            setcontr(testimonials.length - 1)
        }
        else { 
            setcontr(contr - 1)
        }
    }

    const handleClickRight = () => {
        if(contr >= testimonials.length - 1){
            setcontr(0)
        }
        else { 
            setcontr(contr + 1)
        }
    }

    const breakpoints = {
        base: '0px',
        sm: '400px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1536px',
      }


    return(
        <>
        <Box w={{ base: "100%", sm: "100%", md: "100%"}} bg="#2C4E80" h={{ base: "15%", sm: "15%", md: "15%"}} alignItems="center" display="flex" flexDirection="column" borderWidth='2px' borderRadius='lg' borderColor='#2C4E8070' boxShadow='8px 8px #2C4E8070;' shadow='lg'>
            <Box h={{ base: "30%", sm: "30%", md: "10%"}} marginTop="2%">
                <Heading fontSize={{base: '2xl', sm: '2xl', md:'4xl'}} size='xl' color='#FFFFFF' display='flex'>
                Testimonials
                </Heading>
            </Box>
            <Box h={{ base: "50%", sm: "50%", md: "90%"}} alignItems="center" display="flex" w={{ base: "70%", sm: "70%", md: "40%"}} justifyContent="space-between" overflowY="clip">
                <ArrowLeftIcon color="white" id="leftArrow" onClick={handleClickLeft}></ArrowLeftIcon>
                <Text color="white" w = "80%" overflowY="clip" fontSize={{base: 'sm', sm: 'sm', md:'md'}}>{ testimonials[contr] }</Text>
                <ArrowRightIcon color="white" id="rightArrow" onClick={handleClickRight}></ArrowRightIcon>
            </Box>

        </Box>
        </>
    )
}

export default Testimonials