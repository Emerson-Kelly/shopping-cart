import { Box, Flex, Button, Spacer, Circle, Float, Stack, Wrap } from "@chakra-ui/react";
import ShoppingBag from "../../assets/shopping-bag.svg?react";
import { Outlet, Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";


export function FloatBasic() {
   const { cartData } = useCart();

    const totalQuantity = cartData.reduce((acc, item) => acc + item.quantity, 0);

    return (
        
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
      {totalQuantity}
      </Circle>
      
    </Float>
  </Box>
  )
    };

const Navbar = () => {
 

  return (
 <>
    <Box as="nav" p={4} bg="teal.700" position={'sticky'} width={'100%'} zIndex={'2'} top={'0'}>
      <Flex maxW="1200px" mx="auto" align="center">
        <Box fontWeight="bold" fontSize="xl" color="white">
          <Link to="/" >PrimePicks</Link>
        </Box>
        <Spacer />
        <Wrap gap="8">
       
        <Stack color="white" fontWeight={'500'}>
          <Link variant="plain" to="/">
           Home
          </Link>
        </Stack>

        <Stack color="white" fontWeight={'500'}>
          <Link variant="plain" to="/shop">
            Featured
          </Link>
        </Stack>

        <Link to="/cart">
                <FloatBasic />
              </Link>
        </Wrap>
      </Flex>
    
    </Box>
       <Outlet />
       </>
  );
};

export default Navbar;
