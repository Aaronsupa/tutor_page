import { Heading, Flex, Container, FormControl, FormLabel, Input, FormHelperText, Button, Link, Box, extendTheme } from "@chakra-ui/react";
import {    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps, 
    ErrorMessage} from 'formik';
import emailjs from "@emailjs/browser";
import { useEffect } from "react";

const breakpoints = {
    base: '0px',
    sm: '400px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }

const theme = extendTheme({ breakpoints })

function ContactMe() {

    function validateEmail(value: string) {
        let error;
        if (!value) {
            error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Invalid email address';
        }
        return error;
    }

    function validateFirst(value: String){
        let error;
        if (!value) {
            error = 'Required';
        } else if (value.length > 15) {
            error = 'Must be 15 characters or less';
        }
        return error;
    }
    
    function validateLast(value: String){
        let error;
        if (!value) {
            error = 'Required';
        } else if (value.length > 15) {
            error = 'Must be 15 characters or less';
        }
        return error;
    }

    function validateMessage(value: String){
        let error;
        if(!value) {
            error = 'Required';
        }
        return error;
    }
    
    return(
        <>
        <Box w={{ base: "90%", sm: "90%", md: "30%"}}  h = {{ base: "20%", sm: "20%", md: "20%"}} marginTop="5%" marginBottom="2%">
            <Heading as='h2' size='xl' color='#1F4172' display='flex' marginLeft='5%'>
            Contact Me
            </Heading>
            <Box bg='#FEFAF6' w='100%' h = '100%' p={4} color='black' borderWidth='2px' borderRadius='lg' borderColor='#D9D9D9' boxShadow='6px 6px #D9D9D9;' shadow='lg' overflowY="scroll">
            <Flex>
                <Container w = '70%' display='flex' flexDirection='column' h = "100%">
                    <Formik
                        initialValues={{ first: '', last: '', email: '', message: ''}}
                        validate={(values) => {
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                            var templateParams = {
                                    first: values.first,
                                    last: values.last,
                                    email: values.email,
                                    message: values.message,

                            };
                            alert(JSON.stringify(values, null, 2));
                            emailjs.send("","", templateParams, {
                                publicKey: "",
                              }).then(function(response) {
                                console.log('SUCCESS!', response.status, response.text);
                              }, function(error) {
                                console.log('FAILED...', error);
                              });
                            }, 400);
                            setSubmitting(false);

                        }} 
                        >
                        {({ isSubmitting }) => (
                                <Form>
                                    <Box display="flex" flexDirection="column" justifyContent="space-between">
                                        <Box marginTop="1%">
                                            <Field type="First Name" name="first" placeholder="First Name" validate={validateFirst}/>
                                            <ErrorMessage name="first" component="div"/>
                                        </Box>
                                        <Box marginTop="2%">
                                            <Field type="Last Name" name="last" placeholder="Last Name" validate={validateLast}/>
                                            <ErrorMessage name="last" component="div"/>
                                        </Box>
                                        <Box marginTop="2%">
                                            <Field type="email" name="email" placeholder="Email" validate={validateEmail}/>
                                            <ErrorMessage name="email" component="div" />
                                        </Box>
                                        <Box marginTop="2%">
                                            <Field type="text" as = "textarea" name="message" placeholder="Message" validate={validateMessage} />
                                            <ErrorMessage name="message" component="div" />
                                        </Box>
                                        <button type="submit" disabled={isSubmitting} color="Blue">
                                            Submit
                                        </button>
                                    </Box>
                                </Form>
                        )}
                    </Formik>
                </Container>
                </Flex>
            </Box>
        </Box>
        </>
    )
}

export default ContactMe;