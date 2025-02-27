import { Box, Flex, Button, Spacer, Circle, Float, Link, Stack, Wrap } from "@chakra-ui/react";
import ShoppingBag from "../../assets/shopping-bag.svg?react";


export const FloatBasic = () => (
  <Box
    position="relative"
    w="24px"
    h="24px"
    bg="#00000000"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <ShoppingBag width={24} height={24} />
    <Float>
      <Circle size="5" bg="red.600" color="white">
        3
      </Circle>
    </Float>
  </Box>
);

const Navbar = () => {
  return (
 
    <Box as="nav" p={4} bg="teal.700">
      <Flex maxW="1200px" mx="auto" align="center">
        <Box fontWeight="bold" fontSize="xl" color="white">
          PrimePicks
        </Box>
        <Spacer />
        <Wrap gap="8">
       
        <Stack>
          <Link variant="plain" color="white" href="#">
           Home
          </Link>
        </Stack>

        <Stack>
          <Link variant="plain" color="white" href="#">
            Featured
          </Link>
        </Stack>
        
        <FloatBasic />
        </Wrap>
      </Flex>
    
    </Box>
  
  );
};

export default Navbar;
