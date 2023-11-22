import { Box, Input, FormControl, FormErrorMessage, FormLabel, Button, Stack, Text, Center, VStack, Textarea, HStack} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import './ChakraAahziLogin.css';

const ChakraAahziLogin = () => {
    const {register, handleSubmit } = useForm();
    const onFormSubmit = (data) => console.log(data);
    const onFormError = (error) => console.log(error);
    return(
        <div className='form'>
            <form onSubmit={handleSubmit(onFormSubmit, onFormError)}>
                <Box
                    style={ 
                        {
                            borderRadius : '10px', 
                            display : 'grid', 
                            placeItems :'center', 
                            width: "100%", 
                            padding: "30px 40px", 
                            background : "transparent",
                            border: "2px solid rgba(255,255,255.0.2)",
                            boxShadow: "0 0 10px rgba(0,0,0,0.6)"
                        }
                    } className='box'>
                    <Stack spacing={25}>
                        <Center>
                        <Text style={
                            {
                                color: 'white',
                                fontSize :'30px',
                                fontWeight : "800",
                                // textShadow: "0 0 2em rgba(0,0,0,0.2), 0 0 3rem rgba(240, 230, 123, 0,3)",
                                textShadow: "rgba(0,0,0,0.8) 1px 0 10px"
                            }
                        }>Aahzi - College Entry Form</Text>
                        </Center>
                        <FormControl isRequired>
                            <HStack>
                                <FormLabel>College Code</FormLabel>
                                <Input type='text' placeholder='Enter College code'
                                {...register('collegecode')}/>
                            </HStack>
                            <FormErrorMessage>Invalid College Code.Please provide a valid college code</FormErrorMessage>
                        </FormControl>

                        <FormControl>
                            <VStack>
                                <FormLabel>College Name</FormLabel>
                                <Input type='text' placeholder='Enter College Name' 
                                {...register('collegename')}/>
                            </VStack>                      
                            <FormErrorMessage>Invalid College Name.Please provide a valid college name</FormErrorMessage>
                        </FormControl>

                        <FormControl>
                            <VStack>
                                <FormLabel>Address 1</FormLabel>
                                <Textarea type='text' placeholder='Enter College address' 
                                {...register('collegeaddress1')}/>
                            </VStack>
                            <FormErrorMessage>Invalid College Code.Please provide a valid college code</FormErrorMessage>
                        </FormControl>

                        <FormControl>
                            <VStack>
                                <FormLabel>Address 2</FormLabel>
                                <Textarea type='text' placeholder='Enter College address' 
                                {...register('collegeaddress2')}/>
                            </VStack>
                            <FormErrorMessage>Invalid College Code.Please provide a valid college code</FormErrorMessage>
                        </FormControl>

                        <FormControl>
                            <HStack>
                                <FormLabel>City</FormLabel>
                                <Input type='text' placeholder='Enter City' 
                                {...register('city')}/>
                            </HStack>
                            <FormErrorMessage></FormErrorMessage>
                        </FormControl>

                        <Button type='submit'
                        style={
                            {
                                width: '100%',
                                height: '35px',
                                borderRadius: '40px',
                                outline :'none',
                                border: '2px solid rgba(255,255,255,0.15)',
                                background : 'rgba(255,255,255,0.4)',
                                fontSize : "17px",
                                color: "white",
                                cursor: "pointer"
                            }
                        }>Submit</Button>

                    </Stack>
                </Box>
            </form>
        </div>
    );
} 
export default ChakraAahziLogin;