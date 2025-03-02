import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    SimpleGrid,
    Image,
    Icon,
    Box
} from '@chakra-ui/react';
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import Hero from "./../assets/hero.png";
import { useNavigate } from "react-router-dom";

const Feature = ({ text, icon, iconBg }) => (
    <Stack direction={'row'} align={'center'} spacing={4}>
        <Flex w={12} h={12} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
            {icon}
        </Flex>
        <Text fontWeight={600} fontSize={'lg'}>{text}</Text>
    </Stack>
);

const Home = () => {
    const navigate = useNavigate();
    return (
        <Container maxW={'7xl'} py={12} textAlign={'center'}>
            <Stack align={'center'} spacing={10} gap={'2rem'}>
                <Image src={Hero} alt="Shopping" w={{ base: '60%', md: '40%' }} />
                <Heading fontSize={{ base: '4xl', md: '6xl' }} lineHeight={'1.2'}>
                    Discover the Best <Text as={'span'} color={'teal.500'}>Deals & Products</Text>
                </Heading>
                <Text fontSize={'lg'} maxW={'3xl'} color={'gray.600'}>
                    Explore a wide range of top-rated products, unbeatable deals, and seamless shopping experiences.
                </Text>
                <Stack spacing={6} direction={'row'}>
                    <Button size={'lg'} colorScheme={'teal'} onClick={() => navigate("/shop")}>Start Shopping</Button>
                    <Button size={'lg'} variant={'outline'} colorScheme={'teal'} onClick={() => window.open("https://fakestoreapi.com")}>Learn More</Button>
                </Stack>
            </Stack>

            <Container maxW={'6xl'} py={16}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems={'center'}>
                    <Stack spacing={6} gap={'2rem'} margin={'2rem 0'}>
                        <Heading fontSize={{ base: '2xl', md: '4xl' }} textAlign={'left'}>Why Choose Us?</Heading>
                        <Text fontSize={'lg'} color={'gray.600'} textAlign={'left'}>
                            Enjoy fast shipping, secure payments, and personalized recommendations.
                        </Text>
                        <Stack spacing={4} gap={'2rem'}>
                            <Feature icon={<Icon as={IoAnalyticsSharp} color={'yellow.500'} w={6} h={6} />} iconBg={'orange.100'} text={'Exclusive Deals & Discounts'} />
                            <Feature icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={6} h={6} />} iconBg={'green.100'} text={'Secure Payment Methods'} />
                            <Feature icon={<Icon as={IoSearchSharp} color={'purple.500'} w={6} h={6} />} iconBg={'purple.100'} text={'Smart Search & Navigation'} />
                        </Stack>
                    </Stack>
                    <Flex justify={'center'}>
                        <Image src={'https://images.unsplash.com/photo-1554200876-56c2f25224fa?auto=format&fit=crop&w=1350&q=80'}
                               rounded={'md'} objectFit={'cover'} w={'full'} h={{ base: '300px', md: '450px' }} />
                    </Flex>
                </SimpleGrid>
            </Container>
            <Container maxW={'6xl'} py={0} >
            <Box mx={'auto'}>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={12} transform={'translateX(4%)'}>
                    <Feature icon={<Icon as={FcAssistant} w={10} h={10} />} text={'24/7 Customer Support'}/>
                    <Feature icon={<Icon as={FcDonate} w={10} h={10} />} text={'Hassle-Free Returns'} />
                    <Feature icon={<Icon as={FcInTransit} w={10} h={10} />} text={'Fast & Reliable Shipping'} />
                </SimpleGrid>
            </Box>
            </Container>
        </Container>
    );
};

export default Home;
