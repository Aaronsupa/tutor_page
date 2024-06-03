import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import { useEffect, useState } from "react";

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


    return(
        <>
        <Box w="100%" bg="#1F4172" h="15%" alignItems="center" display="flex" flexDirection="column">
            <Heading as='h2' size='xl' color='#FFFFFF' display='flex' h="10%" marginTop="2%">
            Testimonials
            </Heading>
            <Box h="90%" alignItems="center" display="flex" w="40%" justifyContent="space-between">
                <ArrowLeftIcon color="white" id="leftArrow" onClick={handleClickLeft}></ArrowLeftIcon>
                <Text color="white" w = "80%" overflowY="clip">{ testimonials[contr] }</Text>
                <ArrowRightIcon color="white" id="rightArrow" onClick={handleClickRight}></ArrowRightIcon>
            </Box>

        </Box>
        </>
    )
}

export default Testimonials