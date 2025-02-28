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

const BodyFeature = ({ text, icon, iconBg }) => (
    <Stack direction={'row'} align={'center'} spacing={4}>
        <Flex w={10} h={10} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
            {icon}
        </Flex>
        <Text fontWeight={600} fontSize={'lg'}>{text}</Text>
    </Stack>
);

const RowFeature = ({ title, text, icon }) => (
    <Stack align={'center'} spacing={3}>
        <Flex w={16} h={16} align={'center'} justify={'center'} rounded={'full'} bg={'gray.100'}>
            {icon}
        </Flex>
        <Text fontWeight={700} fontSize={'xl'} textAlign={'center'}>{title}</Text>
        <Text color={'gray.600'} textAlign={'center'} fontSize={'md'}>{text}</Text>
    </Stack>
);

export default function Home() {

    return (
        <Container backgroundColor={'#15b8a60d'} backgroundImage={'radial-gradient(#0fccce 0.6px, #61dafb00 0.6px)'} backgroundSize={'16px 16px'} maxWidth={'100%'} py={16}>
            <Stack textAlign={'center'} align={'center'} spacing={8} gap={'1.2rem'}>
                <Image src={Hero} alt="Shopping" width={{ base: '50%', md: '30%' }} />
                <Heading fontWeight={700} fontSize={{ base: '3xl', md: '5xl' }}>
                    Your One-Stop Shop for{' '}
                    <Text as={'span'} color={'teal.500'}>
                        Everything You Need
                    </Text>
                </Heading>
                <Text color={'gray.500'} maxW={'2xl'} fontSize={'lg'}>
                    Shop top-rated products from the latest tech gadgets to stylish fashion. <br/>Enjoy fast shipping, unbeatable deals, and premium customer service.
                </Text>
                <Stack spacing={4} direction={'row'} paddingBottom={'4rem'}>
                    <Button rounded={'full'} px={8} colorScheme={'teal'} bg={'teal.500'} _hover={{ bg: 'teal.400' }}>
                        Start Shopping
                    </Button>
                    <Button rounded={'full'} px={8} variant={'outline'} colorScheme={'teal'}>
                        Browse Categories
                    </Button>
                </Stack>
            </Stack>

            <Container maxW={'6xl'} py={12}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems={'center'}>
                    <Stack spacing={6} gap={'1rem'} lineHeight={'1.5'}>
                        <Text textTransform={'uppercase'} color={'teal.700'} fontWeight={700} fontSize={'sm'} bg={'teal.100'} px={3} py={1} rounded={'md'} alignSelf={'flex-start'} >
                            Why Shop With Us
                        </Text>
                        <Heading fontSize={{ base: '2xl', md: '4xl' }} lineHeight={'1.2'}>Best Deals, Fast Delivery, Exceptional Service</Heading>
                        <Text color={'gray.500'} fontSize={'lg'}>
                            Experience shopping like never before with secure transactions, hassle-free returns, and products curated for your needs.
                        </Text>
                        <Stack spacing={4} gap={'1rem'} margin={'.5rem 0'}>
                            <BodyFeature icon={<Icon as={IoAnalyticsSharp} color={'yellow.500'} w={6} h={6} />} iconBg={'orange.100'} text={'Best Sellers & Hot Deals'} />
                            <BodyFeature icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={6} h={6} />} iconBg={'green.100'} text={'Secure Payment Options'} />
                            <BodyFeature icon={<Icon as={IoSearchSharp} color={'purple.500'} w={6} h={6} />} iconBg={'purple.100'} text={'Easy Search & Navigation'} />
                        </Stack>
                    </Stack>

                    <Flex justify={'center'}>
                        <Image rounded={'md'} alt={'shopping experience'} src={'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'} objectFit={'cover'} maxW={'full'} height={{ base: '250px', sm: '400px', md: '500px' }} />
                    </Flex>
                </SimpleGrid>
            </Container>

            <Box py={10} maxW={'6xl'} margin={'auto'}>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={12}>
                    <RowFeature icon={<Icon as={FcAssistant} w={12} h={12} />} title={'Lifetime Support'} text={'Our customer service team is available 24/7 to help you with any questions or issues.'} />
                    <RowFeature icon={<Icon as={FcDonate} w={12} h={12} />} title={'Secure & Easy Checkout'} text={'We ensure your personal information is always protected during checkout.'} />
                    <RowFeature icon={<Icon as={FcInTransit} w={12} h={12} />} title={'Fast Shipping'} text={'Enjoy fast, reliable shipping with tracking updates every step of the way.'} />
                </SimpleGrid>
            </Box>
        </Container>
    );
}


